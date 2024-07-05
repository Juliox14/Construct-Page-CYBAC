import Head from "next/head";

const TemplateLayout = ({children}) => {
  return(
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link rel="stylesheet" href="css/styles.css" />
      </Head>


      <div className="template-container">
        {children}
      </div>
    </>
  );
};

export default TemplateLayout;