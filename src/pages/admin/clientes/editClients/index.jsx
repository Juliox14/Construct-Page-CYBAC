import AdminLayout from '../../../../components/admin';
import Table from '../../../../components/admin/body/clientes/tableClientes';
import classes from './editClientsStyle.module.css';
import Ruta from '../../../../components/admin/body/items-util/ruta';
import { getElement } from '../../../../lib/items';
const editClients = ({ data_client }) => {
    const rutas = [
        { link: '/admin', nombre: 'Inicio' },
        { link: '/admin/clientes', nombre: 'Clientes' },
        { link: '/admin/clientes/editClients', nombre: 'Editar Clientes' },
    ];
    return (
        <AdminLayout>
            <div className={classes.body}>
                <Ruta rutas={rutas} titulo="Editar Clientes"></Ruta>
                <Table data={data_client[0]}></Table>
            </div>
        </AdminLayout>
    );
};
export async function getServerSideProps() {
    const data_client = await getElement('home_clients');
    return {
        props: {
            data_client,
        },
    };
}

export default editClients;
