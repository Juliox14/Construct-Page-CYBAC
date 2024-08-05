import AdminLayout from '../../../components/admin';
import Proyectos from '../../../components/admin/body/proyectos';
import { getElement } from '../../../lib/items';

const Inicio = ({ proyectos }) => {
    return (
        <AdminLayout>
            <Proyectos proyectos={proyectos} />
        </AdminLayout>
    );
};

export async function getServerSideProps() {
    const proyectos = await getElement('proyectos');
    return {
        props: {
            proyectos: proyectos,
        },
    };
}
export default Inicio;
