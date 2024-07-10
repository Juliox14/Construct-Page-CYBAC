import Head from "next/head";
import NavAdmin from "./header/NavAdmin";
import classes from "./header/header.module.scss";
import classesMain from "./body/mainSection.module.scss";

const AdminLayout = ({children}) => {
  return(
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      
      <div className={classes.boxHeaderMain}>
        <NavAdmin />
        <div className={classesMain.boxFather}>
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;