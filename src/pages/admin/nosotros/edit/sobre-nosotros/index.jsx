import AdminLayout from '../../../../../components/admin';
import EditAbout from '../../../../../components/admin/body/nosotros/EditAbout';
import { getElement } from '../../../../../lib/items';

function ServicioEdit({
    dataAbout
}) {
    return (
        <AdminLayout>
            <EditAbout dataSSR={dataAbout}/>
        </AdminLayout>
    );
}

export default ServicioEdit;

export async function getServerSideProps() {
    const [aboutItems] = await getElement('about');
    return {
        props: {
            dataAbout: aboutItems,
        }
    }
}