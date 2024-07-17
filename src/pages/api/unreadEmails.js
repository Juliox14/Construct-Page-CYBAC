import Imap from 'imap';
import { simpleParser } from 'mailparser';

const imapConfig = {
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD,
  host: process.env.IMAP_HOST,
  port: parseInt(process.env.IMAP_PORT, 10),
  tls: true,
};

const email = process.env.EMAIL_USER;


const getEmails = async (req, res) => {
  return new Promise((resolve, reject) => {
    const imap = new Imap(imapConfig);

    imap.once('ready', () => {
      imap.openBox('INBOX', false, (err, box) => {
        if (err) {
          reject(err);
          return;
        }

        imap.search(['UNSEEN', ['FROM', email]], (err, results) => {
          if (err) {
            reject(err);
            return;
          }

          if (results.length === 0) {
            resolve([]);
            imap.end();
            return;
          }

          const fetch = imap.fetch(results, { bodies: ['HEADER.FIELDS (FROM SUBJECT)', 'TEXT'], struct: true });
          let emails = [];
          let parsed = undefined;
          let textPart = undefined;

          fetch.on('message', (msg, seqno) => {
            const email = { subject: '', nombre: '', correo: '', mensaje: '' };

            msg.on('body', (stream, info) => {
              let buffer = '';

              stream.on('data', (chunk) => {
                buffer += chunk.toString('utf8');
              });

              stream.once('end', async () => {
                if (info.which === 'HEADER.FIELDS (FROM SUBJECT)') {
                  const header = Imap.parseHeader(buffer);
                  email.subject = header.subject && header.subject[0];
                }
                if (info.which.includes("TEXT")) {
                  try {
                    parsed = await simpleParser(buffer);
                    textPart = parsed.text.split('----')[0].trim();
                    let [nombrePart, emailPart, mensajePart] = textPart.split(" - ");
                    email.nombre = nombrePart.split(": ")[1];
                    email.correo = emailPart.split(": ")[1];
                    email.mensaje = mensajePart.split(": ")[1];
                    emails.push(email);
                  } catch (err) {
                    reject(err);
                  }
                }
                if (textPart !== undefined) {
                  if (emails.length === results.length) {
                    res.status(200).json(emails);
                  }
                }


              });
            });
          });

          fetch.once('error', (fetchErr) => {
            reject(fetchErr);
          });

          fetch.once('end', () => {
            resolve(emails);
            imap.end();
          });
        });
      });
    });

    imap.once('error', (err) => {
      reject(err);
    });

    imap.once('end', () => {
      imap.end();
    });

    imap.connect();
  });
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    await getEmails(req, res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error obteniendo correos' });
  }
}
