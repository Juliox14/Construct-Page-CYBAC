import AdminLayout from '../../../../components/admin';
import EditService from '../../../../components/admin/body/servicios/EditService';
import { getItemsBy } from '../../../../lib/items';

function ServicioEdit({ servicio }) {
    return (
        <AdminLayout>
            <EditService servicio={servicio} />
        </AdminLayout>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { servicio } = params;

    const services = await getItemsBy('services', servicio);
    return {
        props: {
            servicio: services,
        },
    };
}

export default ServicioEdit;
