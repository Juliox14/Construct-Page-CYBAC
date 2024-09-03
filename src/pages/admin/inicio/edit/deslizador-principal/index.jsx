import AdminLayout from '../../../../../components/admin';
import EditHome from '../../../../../components/admin/body/inicio/EditHome';
import { getElement } from '../../../../../lib/items';
// import { getElement } from '../../../../../lib/items';
// import { htmlToText } from 'html-to-text';

export default function ServicioEdit({
    data,
}) {
    return (
        <AdminLayout>
            <EditHome hero={data} />
        </AdminLayout>
    );
}

export async function getServerSideProps() {
    const response = await getElement('home');
    
    return{
        props: {
            data: response[0],
        }
    }

}
