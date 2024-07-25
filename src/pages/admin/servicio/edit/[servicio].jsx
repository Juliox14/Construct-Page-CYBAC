import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/admin';
import EditService from '../../../../components/admin/body/servicios/EditService';

function ServicioEdit() {
    const router = useRouter();
    const { servicio } = router.query;
    return (
        <AdminLayout>
            <EditService servicio={servicio} />
        </AdminLayout>
    );
}

export default ServicioEdit;