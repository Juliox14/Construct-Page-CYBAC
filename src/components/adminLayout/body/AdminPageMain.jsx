import AdminBodyLayout from './adminBodyLayout';
import SearchBar from './searchBar';
import AdminList from './adminList';
import Slider from '../../../../public/images/admin/slider.png';
import { title } from 'process';

const AdminPageMain = () => {

  const componentsInThePage = [
    {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider'},
    {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about'},
    {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects'},
  ];

    return (
        <> 
            <SearchBar />
            <AdminBodyLayout>
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
                <AdminList 
                ruta_imagen={Slider} 
                nombre_elemento={'Slider'} 
                descripcion={'Slider de la página principal'}
                link={'/admin/slider'}
                />
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