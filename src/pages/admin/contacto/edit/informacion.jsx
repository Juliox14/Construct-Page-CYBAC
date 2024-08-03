import AdminLayout from "../../../../components/admin";
import EditInformacion from "../../../../components/admin/body/contacto/edit/EditInformacion";
import { getElement } from "../../../../lib/items";
const editInformacion = ({contact}) => {
    return (
        <AdminLayout>
            <EditInformacion contacto={contact} />
        </AdminLayout>
    )
}

export async function getServerSideProps() {
    const contact = await getElement('contact');

    return {
        props: {
            contact,
        },
    };
}


export default editInformacion;