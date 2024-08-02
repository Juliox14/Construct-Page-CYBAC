import AdminLayout from "../../../../components/admin";
import EditFooter from "../../../../components/admin/body/footer/EditFooter";
import { getElement } from "../../../../lib/items";

const editFooter = ({footer}) => {
    return (
        <>
            <AdminLayout>
                <EditFooter footer={footer}/>
            </AdminLayout>
        </>
    );
}

export async function getServerSideProps() {
    const footer = await getElement('footer');
    return {
        props: {
            footer,
        }
    }
}

export default editFooter;