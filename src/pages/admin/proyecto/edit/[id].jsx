import AdminLayout from '../../../../components/admin';
import EditProyecto from '../../../../components/admin/body/proyectos/EditProyecto';
import { getItemsBy } from '../../../../lib/items';

function ServicioEdit({proyecto}) {
    return (
        <AdminLayout>
            <EditProyecto proyecto={proyecto} />
        </AdminLayout>
    );
}

export async function getServerSideProps(context){
    const { params } = context;
    const { id } = params;
    const type = 'proyects';
    const project = await getItemsBy(type, id);
    return {
        props: {
            proyecto: project[0]
        },
    };
}

export default ServicioEdit;