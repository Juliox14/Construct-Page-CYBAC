import { useEffect, useRef, useState } from 'react';
import classes from './adminList.module.scss';
import Link from 'next/link';

// Elementos de MUI material
import { Box, CircularProgress, useTheme } from '@mui/material';


export default function AdminList({nombre_elemento, descripcion, link, idFrame, position}) {

    const [loading, setLoading] = useState(true);
    const iframe = useRef(null);
    const theme = useTheme();

    useEffect(() => {
        iframe.current.onload = () => {
            setLoading(false);
        }
    }, []);

    return (
        <Box className={classes.boxFatherItemList} sx={{
            bgcolor: theme.palette.mode === 'dark' ? '#2f2f2f6d' : 'white',
            boxShadow: theme.palette.mode === 'dark' ? "" : "0px 0px 10px 0px rgba(0,0,0,0.1)",
            transition: `background-color ${theme.transitions.duration.standard}ms`
        }}>
            <Link href={link}>
                <Box className={classes.itemList} sx={{
                    color: theme.palette.mode === 'dark' ? "white" : "#014655",
                    transition: `background-color 1000ms`
                }}
                >
                    <div style={{
                        backgroundColor: theme.palette.mode === 'dark' ? "#c8c8c8" : "white",
                        maxWidth: "420px",
                        marginTop: "20px",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        borderRadius: "15px",
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
                            {loading && (
                                    <Box sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "35%",
                                        transform: "translate(-50%, -50%)",
                                    }}>
                                        <CircularProgress />
                                    </Box>
                                )}
                            <iframe 
                            id={idFrame}
                            ref={iframe}
                            src={"http://localhost:3000/"} 
                            title={"Reichstag"} 
                            style={{ 
                                position: "absolute",
                                width: "100%",
                                height: "1000vh",
                                top: `${position}`,
                                transform: 'scale(0.7)',
                                transformOrigin: '0 0',
                                borderRadius: "15px",
                                sandbox:"allow-same-origin allow-scripts",
                                
                            }} />
                        </div>
                    </div>
                    <p>{nombre_elemento}</p>
                    <p>{descripcion}</p>
                    <p href={link}>Haga click para editar</p>
                </Box>
            </Link>
        </Box>
    )
}
