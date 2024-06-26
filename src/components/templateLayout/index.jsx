import Head from 'next/head';

const TemplateLayout = ({ children }) => (
  <>
    <Head>
      <link rel="stylesheet" href="/css/bootstrap.css" />
      <link rel="stylesheet" href="/css/template.css" />
    </Head>
    <div className="template-container">
      {children}
    </div>
  </>
);

export default TemplateLayout;