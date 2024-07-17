import AdminBodyLayout from './adminBodyLayout';
import SearchBar from './searchBar';
import AdminList from './adminList';
import { useState } from 'react';

const AdminPageMain = () => {

    const componentsInThePage = [
    {title: 'Slider', description: 'Slider de la página principal', link: '/admin/slider', id: "frame1", position: "-19vh"},
    {title: 'Sobre nosotros', description: 'Información sobre la empresa', link: '/admin/about', id: "frame2", position: "-66vh"},
    {title: 'Proyectos', description: 'Proyectos de la empresa', link: '/admin/projects', id: "frame3", position: "-236vh"},
    {title: 'Slider clientes', description: 'Clientes mostrados en un slider con su respectivo nombre', link: '/admin/projects', id: "frame4", position: "-445vh"},
    ];

    const [filterSearch, setFilterSearch] = useState(componentsInThePage);

    const handleSearch = (search) => {
        setFilterSearch(componentsInThePage.filter((component) =>{
            return component.title.toLowerCase().includes(search.title.toLowerCase());
        }));
    }

    return (
        <> 
            <SearchBar top100Films={componentsInThePage} callBack={handleSearch}/>
            <AdminBodyLayout>
                {filterSearch.map((component, index) => (
                    <AdminList key={index} 
                        nombre_elemento={component.title} 
                        descripcion={component.description} 
                        link={component.link} 
                        idFrame={component.id}
                        position={component.position} />
                ))}
            </AdminBodyLayout>
        </>
    );
}

export default AdminPageMain;