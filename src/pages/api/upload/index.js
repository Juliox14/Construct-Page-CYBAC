import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import formidable, { errors as formidableErrors } from 'formidable';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function HandleImage(req, res) {
    switch (req.method) {
        case 'POST':
            const form = formidable({});
            let fields;
            let files;
            try {
                [fields, files] = await form.parse(req);
            } catch (err) {
                // example to check for a very specific error
                if (err.code === formidableErrors.maxFieldsExceeded) {
                }
                console.error(err);
                res.writeHead(err.httpCode || 400, {
                    'Content-Type': 'text/plain',
                });
                res.end(String(err));
                return;
            }

            const keys = Object.keys(files);
            var arrayKeys = [];

            const promises = keys.map(async (key) => {
                const file = files[key];
                const number = key.match(/\d+/);

                const buffer = await fileToBuffer(file[0]);

                const response = await new Promise((resolve, reject) => {
                    cloudinary.uploader
                        .upload_stream({}, (error, result) => {
                            if (error) {
                                reject(error);
                            }
                            resolve(result);
                        })
                        .end(buffer);
                });

                arrayKeys.push({
                    id: parseInt(number[0], 10),
                    file: response.secure_url,
                });
            });

            await Promise.all(promises);

            res.status(200).json({
                message: 'Imagen subida',
                url: arrayKeys,
            });
            break;
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
}

const fileToBuffer = async (file) => {
    return fs.promises.readFile(file.filepath);
};
