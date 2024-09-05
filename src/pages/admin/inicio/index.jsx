import AdminLayout from "../../../components/admin";
import AdminPageMain from "../../../components/admin/body/inicio";
import {parse} from "cookie";
import { jwtVerify } from 'jose';

export default function AdminPage(realUser) {

    return (
        <AdminLayout realUser={realUser}>
            <AdminPageMain />
        </AdminLayout>
    )
}
export async function getServerSideProps({ req }) {
    let realUser = null;
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth;
    realUser = token;
    if (token != null) {
      try {
        const secretKey = new TextEncoder().encode('JcGnCa-18-13-08');
        const { payload } = await jwtVerify(token, secretKey);
        realUser=payload;
      } catch (error) {
        console.error('Error al verificar el token:', error);
      }
    }else{
        realUser = 'No existe la cookie';
    }
  
    return {
      props: {
        realUser,
      },
    };
  }
