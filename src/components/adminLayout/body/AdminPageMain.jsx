import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../../../context/contexDarkMode';
import AdminBodyLayout from './bodyLayout';
import AdminList from './adminList';
import Slider from '../../../../public/images/admin/slider.png';

const AdminPageMain = () => {

    return (
        <>
            <AdminBodyLayout>
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
            </AdminBodyLayout>
        </>
    );
}

export default AdminPageMain;