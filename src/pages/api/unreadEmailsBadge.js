import Imap from 'imap';

const imapConfig = {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: process.env.IMAP_HOST,
    port: parseInt(process.env.IMAP_PORT, 10),
    tls: true,
};

const email = process.env.EMAIL_USER;

const getUnreadEmailsCount = (imap) => {
    return new Promise((resolve, reject) => {
        imap.once('ready', function () {
            imap.openBox('INBOX', true, function (err, box) {
                if (err) return reject(err);

                imap.search(['UNSEEN', ['FROM', email]], function (err, results) {
                    if (err) return reject(err);
                    resolve(results.length);
                    imap.end();
                });
            });
        });

        imap.once('error', function (err) {
            reject(err);
        });

        imap.connect();
    });
};

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const imap = new Imap(imapConfig);
        const notifications = await getUnreadEmailsCount(imap);
        res.status(200).json({ notifications: notifications });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error obteniendo correos' });
    }
}
