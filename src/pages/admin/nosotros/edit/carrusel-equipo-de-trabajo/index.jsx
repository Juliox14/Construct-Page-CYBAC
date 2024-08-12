import AdminLayout from '../../../../../components/admin';
import EditSliderTeam from "../../../../../components/admin/body/nosotros/EditSliderTeam";
import { getElement } from '../../../../../lib/items';

function ServicioEdit({
    teamItems,
}) {
    return (
        <AdminLayout>
            <EditSliderTeam teamItems={teamItems}/>
        </AdminLayout>
    );
}

export async function getServerSideProps() {
    const teamItems = await getElement('team');
    
    return{
        props: {
            teamItems 
        }
    }

}
export default ServicioEdit;