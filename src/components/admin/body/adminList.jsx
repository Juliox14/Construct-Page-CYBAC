import classes from './adminList.module.scss';
import Link from 'next/link';

// Elementos de MUI material
import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';

// Elementos de react
import { useEffect, useRef, useState } from 'react';


export default function AdminList({nombre_elemento, descripcion, link, id, url, video}) {
    
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleOver = () => {
        setHover(true);
    }

    const handleOut = () => {
        setHover(false);
    }

    const handleOutProgress = () => {
        return setLoading(false);
    }


    return (
        <Box component="section" className={classes.adminList_boxFatherItemList} sx={{
            position: "relative",
            bgcolor: theme.palette.mode === 'dark' ? '#2f2f2f6d' : 'white',
            boxShadow: theme.palette.mode === 'dark' ? "" : "0px 0px 10px 0px rgba(0,0,0,0.1)",
            transition: `background-color ${theme.transitions.duration.standard}ms`
        }}>
            <Link href={link} onMouseOver={handleOver} onMouseOut={handleOut}/>
            {hover && (<div className={classes.adminList_boxFatherItemList_editBox} style={{
                backgroundColor: theme.palette.mode === 'dark' ? "#2f2f2fb4" : "#ffffffa4",
            }}> 
                <EditIcon fontSize="large" sx={{ color: theme.palette.mode === 'dark' ? "#ADA479" : "#014655"}}/>
            </div>)}
            <Box className={classes.adminList_itemList} sx={{
                color: theme.palette.mode === 'dark' ? "white" : "#014655",
                transition: `background-color ${theme.transitions.duration.standard}ms`,
            }}>
                <div>
                    <div>
                        {video === undefined ? (
                            <>
                                {loading && (<div className={classes.adminList_itemList_circularProgress}> <CircularProgress /> </div>)}
                                <Image key={id} src={url} alt={nombre_elemento} fill style={{ borderRadius: "20px" }} onLoad={() =>handleOutProgress()}/>
                            </>
                        ): (
                            <video autoPlay loop muted playsInline style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "20px",
                            }}>
                                <source src="/images/admin/inicio/slider_home.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                            )}
                    </div>
                </div>
                <p><strong>{nombre_elemento}</strong></p>
                <p className={classes.desc}>{descripcion}</p>
            </Box>
        </Box>
    )
}
