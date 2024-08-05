import AdminLayout from '../../../../../components/admin';
import EditHome from '../../../../../components/admin/body/inicio/EditHome';

function ServicioEdit() {
    return (
        <AdminLayout>
            <EditHome servicio={'Arquitectura'} />
        </AdminLayout>
    );
}

export default ServicioEdit;
