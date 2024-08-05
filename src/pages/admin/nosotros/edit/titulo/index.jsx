import AdminLayout from '../../../../../components/admin';
import EditTitle from '../../../../../components/admin/body/nosotros/EditTitle';
import { getElement } from '../../../../../lib/items';

function ServicioEdit({ dataTitle }) {
    return (
        <AdminLayout>
            <EditTitle dataSSR={dataTitle} />
        </AdminLayout>
    );
}

export default ServicioEdit;

export async function getServerSideProps() {
    const aboutItems = await getElement('about');

    return {
        props: {
            dataTitle: aboutItems[0],
        },
    };
}
