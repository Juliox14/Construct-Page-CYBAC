import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import ProjectDetail from '../../components/projects/project-detail';
import Footer from '../../components/layout/footer';
import { getItemsBy, getElement } from '../../lib/items';

function ProjectDetailPage({
    project,
    footerItems,
    servicesList
}) {
    return (
        <>
            <Head>
                <title>{project.nombre_proyecto}</title>
                <meta
                    name="description"
                    content="Reichstag Edificaciones es una empresa constructora con más de 20 años de experiencia en el mercado, especializada en la construcción de edificaciones residenciales, comerciales e industriales."
                />
            </Head>
            <Breadcrumb 
                title={project.nombre_proyecto} 
                subTitle={project.tipo_obra}
                desc={`Informacion del proyecto ${project.nombre_proyecto}`}
            />
            <ProjectDetail
                project={project}
                projectsSidebar={project}
            />
            <Footer footerItems={footerItems} services={servicesList} />
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    const type = 'proyects';

    const project = await getItemsBy(type, id);
    const footerItems = await getElement('footer');
    const servicesList = await getElement('titulo_servicios');
    return {
        props: {
            servicesList,
            project: project[0],
            footerItems,
        },
    };
}

ProjectDetailPage.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetailPage;
