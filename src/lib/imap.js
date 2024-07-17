import Imap from 'imap';
import { simpleParser } from 'mailparser';


const getEmails = async (imapConfig) => {
  return new Promise((resolve, reject) => {
    const imap = new Imap(imapConfig);

    imap.once('ready', () => {
      imap.openBox('INBOX', false, (err, box) => {
        if (err) {
          reject(err);
          return;
        }

        imap.search(['UNSEEN'], (err, results) => {
          if (err) {
            reject(err);
            return;
          }

          if (results.length === 0) {
            resolve([]);
            imap.end();
            return;
          }

          const fetch = imap.fetch(results, { bodies: '' });
          const emails = [];

          fetch.on('message', (msg, seqno) => {
            let buffer = '';

            msg.on('body', (stream) => {
              stream.on('data', (chunk) => {
                buffer += chunk.toString('utf8');
              });

              stream.once('end', async () => {
                try {
                  const parsed = await simpleParser(buffer);
                  emails.push({
                    text: parsed.text, // Solo obtenemos el texto
                  });
                } catch (err) {
                  reject(err);
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
      console.log('Connection ended');
    });

    imap.connect();
  });
};


export { getEmails };