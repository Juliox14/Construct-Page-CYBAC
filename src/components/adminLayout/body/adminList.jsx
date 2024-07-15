import { Box } from '@mui/material';
import classes from './adminList.module.scss';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';

export default function AdminList({nombre_elemento, descripcion, link}) {

    return (
        <Box className={classes.boxFatherItemList}>
            <Box className={classes.itemList} sx={{
                bgcolor: 'white',
                color: 'text.primary',
            }}
            >
                <div style={{
                    maxWidth: "360px",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}>
                    <div style={{
                        width: "600px",
                        position: "relative",
                        height: "340px",
                        overflow: "hidden",
                        pointerEvents: "none",
                    }}>
                        <iframe 
                        src={"https://www.reichstag.com.mx/"} 
                        title={"Reichstag"} 
                        style={{ 
                            position: "absolute",
                            width: "100%",
                            height: "1000vh",
                            top: "-10.5vh",
                            transform: 'scale(0.6)',
                            transformOrigin: '0 0',
                            borderRadius: "15px",
                            sandbox:"allow-same-origin allow-scripts"
                        }} />
                    </div>
                </div>
                <p>{nombre_elemento}</p>
                <p>{descripcion}</p>
                <p href={link}>Haga click para editar</p>
            </Box>
        </Box>
    )
}
