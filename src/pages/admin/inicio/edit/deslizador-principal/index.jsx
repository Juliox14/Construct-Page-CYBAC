import AdminLayout from '../../../../../components/admin';
import EditHome from '../../../../../components/admin/body/inicio/EditHome';
import { getImagesType } from '../../../../../lib/getImages';
import { getElement } from '../../../../../lib/items';
// import { getElement } from '../../../../../lib/items';
// import { htmlToText } from 'html-to-text';

function ServicioEdit({ data, images }) {
    return (
        <AdminLayout>
            <EditHome hero={data} srcImages={images} />
        </AdminLayout>
    );
}

export async function getServerSideProps() {
    const response = await getElement('home');
    const dataImages = async () => {
        const promise = response[0].map(async (item, index) => {
            const url = await getImagesType('hero', index + 1);
            return url;
        });
        const image = await Promise.all(promise);
        return image;
    };

    return {
        props: {
            data: response[0],
            images: await dataImages(),
        },
    };
}

// export async function getServerSideProps() {
//     let textContent = {};
//     const response = await getElement('home');
//     console.log(response[0]);

//     response[0].map((item) => {
//     // Convertir HTML a texto
//         textContent = {
//             title: htmlToText(item.title, { wordwrap: 130 }),
//             subtitle: htmlToText(item.subtitle, { wordwrap: 130 }),
//             descripcion: htmlToText(item.descripcion, { wordwrap: 130 }),
//         };
//     });

//     console.log(textContent);

//     return {
//         props: {
//             textContent,
//         },
//     };
// }

export default ServicioEdit;
