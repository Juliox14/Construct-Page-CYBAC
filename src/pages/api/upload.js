export default async function uploadHandler(req, res) {
    if (req.method === 'POST') {
        const data = await req.body;

        console.log(data);

        if (!file || !servicio) {
            return res.status(400).json({ success: false });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filePath = path.join(process.cwd(), "public/images/servicios/", servicio);
        await writeFile(filePath, buffer);pg
        console.log(`open ${filePath} to see the uploaded file`);

        return NextResponse.json({ success: true });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}