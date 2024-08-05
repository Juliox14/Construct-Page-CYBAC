import AdminLayout from '../../../../../components/admin';
import EditDireccion from '../../../../../components/admin/body/nosotros/EditDireccion';
import { getElement } from '../../../../../lib/items';

function ServicioEdit({ dataAbout }) {
    return (
        <AdminLayout>
            <EditDireccion dataSSR={dataAbout} />
        </AdminLayout>
    );
}

export default ServicioEdit;

export async function getServerSideProps() {
    const [aboutItems] = await getElement('about');
    return {
        props: {
            dataAbout: aboutItems,
        },
    };
}
