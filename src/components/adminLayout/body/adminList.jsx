import { Box } from '@mui/material';
import classes from './adminList.module.scss';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';

export default function AdminList({ruta_imagen, nombre_elemento, descripcion, link}) {

    return (
        <Box className={classes.itemList} sx={{
            bgcolor: 'white',
            color: 'text.primary',
        }}
        >
            <Image src={ruta_imagen} width={100} height={100} draggable="false" alt='Imagen elemento' priority="false"/>
            <p>{nombre_elemento}</p>
            <p>{descripcion}</p>
            <a href={link}><EditIcon/></a>
        </Box>
    )
}
