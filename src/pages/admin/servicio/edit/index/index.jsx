import AdminLayout from '../../../../../components/admin';
import IndexServiceEdit from '../../../../../components/admin/body/servicios/IndexServiceEdit';
import { getElement } from '../../../../../lib/items';

function ServicioEdit({ homeServices }) {
    return (
        <AdminLayout>
            <IndexServiceEdit homeServices={homeServices} />
        </AdminLayout>
    );
}

export async function getServerSideProps() {
    const homeServices = await getElement('home_services');
    return {
        props: {
            homeServices: homeServices[0],
        },
    };
}
export default ServicioEdit;
