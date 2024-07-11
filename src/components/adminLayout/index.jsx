import Head from "next/head";
import NavAdmin from "./header/NavAdmin";
import classes from "./header/header.module.scss";
import classesMain from "./body/mainSection.module.scss";
import Box from "@mui/material/Box";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <div className={classes.boxHeaderMain}>
        <NavAdmin />
        <Box className={classesMain.boxFather}
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          {children}
        </Box>
      </div>
    </>
  );
};

export default AdminLayout;