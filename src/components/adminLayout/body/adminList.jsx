import { Box, CircularProgress } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import classes from './adminList.module.scss';
import Link from 'next/link';

export default function AdminList({nombre_elemento, descripcion, link, idFrame, position}) {

    const [loading, setLoading] = useState(true);
    const iframe = useRef(null);

    useEffect(() => {
        iframe.current.onload = () => {
            setLoading(false);
        }
    }, []);

    return (
        <Box className={classes.boxFatherItemList} sx={{
            bgcolor: 'white',
            color: 'text.primary',
        }}>
            <Link href={link}>
                <Box className={classes.itemList} sx={{
                    bgcolor: 'white',
                    color: 'text.primary',
                }}
                >
                    <div style={{
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
