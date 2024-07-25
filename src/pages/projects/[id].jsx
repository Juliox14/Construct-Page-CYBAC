import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../../components/banner/index-5';
import Breadcrumb from '../../components/breadcrumb';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectDetail from '../../components/projects/project-detail';
import Footer from '../../components/layout/footer';
import { getItemsBy, getElement } from '../../lib/items';

function ProjectDetailPage({
    project,
    footerItems,
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
                subTitle="Proyecto"
                title={project.nombre_proyecto}
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ProjectDetail
                project={project}
                projectsSidebar={project}
            />
            <Footer footerItems={footerItems} />
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    const type = 'proyects';

    const project = await getItemsBy(type, id);
    const footerItems = await getElement('footer');

    return {
        props: {
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
