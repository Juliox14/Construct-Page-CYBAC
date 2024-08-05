import AdminLayout from '../../../../../components/admin';
import IndexServiceEdit from '../../../../../components/admin/body/servicios/IndexServiceEdit';
import { getElement } from '../../../../../lib/items';

function ServicioEdit({ home_services }) {
    return (
        <AdminLayout>
            <IndexServiceEdit home_services={home_services} />
        </AdminLayout>
    );
}

export async function getServerSideProps() {
    const home_services = await getElement('home_services');
    return {
        props: {
            home_services: home_services[0],
        },
    };
}
export default ServicioEdit;
