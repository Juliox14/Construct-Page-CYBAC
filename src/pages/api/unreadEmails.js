import Imap from 'imap';

const imapConfig = {
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD, 
  host: process.env.IMAP_HOST, 
  port: parseInt(process.env.IMAP_PORT, 10),
  tls: true,
};

const getUnreadEmailsCount = (imap, email) => {
  return new Promise((resolve, reject) => {
    imap.once('ready', function() {
      imap.openBox('INBOX', true, function(err, box) {
        if (err) return reject(err);

        imap.search(['UNSEEN', ['FROM', email]], function(err, results) {
          if (err) return reject(err);
          resolve(results.length);
          imap.end();
        });
      });
    });

    imap.once('error', function(err) {
      reject(err);
    });

    imap.connect();
  });
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Falta la dirección de correo' });
  }

  const imap = new Imap(imapConfig);

  try {
    const count = await getUnreadEmailsCount(imap, email);
    res.status(200).json({ unreadEmails: count });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error obteniendo correos no leídos' });
  }
}