import classes from './adminList.module.scss';
import Link from 'next/link';
import axios from 'axios';

// Elementos de MUI material
import { Box, useTheme, Button } from '@mui/material';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';

// Elementos de react
import { useState } from 'react';

export default function AdminList({ nombre_elemento, descripcion, link, id, url, video, delete_button }) {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    const handleOver = () => {
        setHover(true);
    }

    const handleOut = () => {
        setHover(false);
    }

    const handleOutProgress = () => {
        setLoading(false);
    }

    const handleDelete = async () => {
        console.log('Si entra');
        const response = await axios.delete(`/api/services/${id}`);
        if (response.status === 200) {
            window.location.reload();
        } else {
            alert("Error al eliminar el elemento, comuníquese con CYBAC TI");
        }
    }

    return (
        <>
            {delete_button === false || delete_button === undefined ? (
                <Box component="section" className={classes.adminList_boxFatherItemList} sx={{
                    position: "relative",
                    bgcolor: theme.palette.mode === 'dark' ? '#2f2f2f6d' : 'white',
                    boxShadow: theme.palette.mode === 'dark' ? "" : "0px 0px 10px 0px rgba(0,0,0,0.1)",
                    transition: `background-color ${theme.transitions.duration.standard}ms`
                }}>
                    <Link href={link} onMouseOver={handleOver} onMouseOut={handleOut}>
                        {hover && (
                            <div className={classes.adminList_boxFatherItemList_editBox} style={{
                                backgroundColor: theme.palette.mode === 'dark' ? "#2f2f2fb4" : "#ffffffa4",
                            }}>
                                <EditIcon fontSize="large" sx={{ color: theme.palette.mode === 'dark' ? "#ADA479" : "#014655" }} />
                            </div>
                        )}
                        <Box className={classes.adminList_itemList} sx={{
                            color: theme.palette.mode === 'dark' ? "white" : "#014655",
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                        }}>
                            <div>
                                <div>
                                    {video === undefined ? (
                                        <>
                                            {loading && (<div className={classes.adminList_itemList_circularProgress}> <CircularProgress /> </div>)}
                                            <Image key={id} src={url} alt={nombre_elemento} fill style={{ borderRadius: "20px" }} onLoad={() => handleOutProgress()} />
                                        </>
                                    ) : (
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
                    </Link>
                </Box>
            ) : deleteConfirm ? (
                <Box component="section" className={classes.adminList_boxFatherItemList} sx={{
                    position: "relative",
                    bgcolor: theme.palette.mode === 'dark' ? '#2f2f2f6d' : 'white',
                    boxShadow: theme.palette.mode === 'dark' ? "" : "0px 0px 10px 0px rgba(0,0,0,0.1)",
                    transition: `background-color ${theme.transitions.duration.standard}ms`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '370px',
                    maxHeight: '400px'
                }}>
                    <p>¿Estás seguro que quieres eliminar este elemento?</p>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        gap: '20px',
                    }}>
                        <Button variant="contained" sx={{
                            backgroundColor: '#d32f2f',
                            color: 'white',
                            "&:hover": {
                                backgroundColor: '#370101',
                                color: '#F1F1F1'
                            }
                        }} onClick={handleDelete}>Eliminar</Button>
                        <Button variant="contained" sx={{
                            backgroundColor: 'gray',
                            borderColor: 'gray',
                            "&:hover": {
                                backgroundColor: '#757254',
                                color: '#F1F1F1'
                            }
                        }} onClick={() => setDeleteConfirm(false)}>Cancelar</Button>
                    </Box>
                </Box>
            ) : (
                <Box component="section" className={classes.adminList_boxFatherItemList} sx={{
                    position: "relative",
                    bgcolor: theme.palette.mode === 'dark' ? '#2f2f2f6d' : 'white',
                    boxShadow: theme.palette.mode === 'dark' ? "" : "0px 0px 10px 0px rgba(0,0,0,0.1)",
                    transition: `background-color ${theme.transitions.duration.standard}ms`
                }}>
                    <div onMouseOver={handleOver} onMouseOut={handleOut}>
                        {hover && (
                            <div className={classes.adminServiceList_boxFatherItemList_editBox} style={{
                                backgroundColor: theme.palette.mode === 'dark' ? "#2f2f2fb4" : "#ffffffa4", display: "flex", gap: '20px'
                            }}>
                                <Link href={link}>
                                    <EditIcon fontSize="large" sx={{ color: theme.palette.mode === 'dark' ? "#ADA479" : "#014655" }} />
                                </Link>
                                <button onClick={() => setDeleteConfirm(true)} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}>
                                    <DeleteIcon fontSize="large" sx={{ color: '#A50505' }} />
                                </button>
                            </div>
                        )}
                        <Box className={classes.adminList_itemList} sx={{
                            color: theme.palette.mode === 'dark' ? "white" : "#014655",
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                        }}>
                            <div style={{ width: 'max-content', height: 'max-content' }}>
                                <div>
                                    {video === undefined ? (
                                        <>
                                            {loading && (<div className={classes.adminList_itemList_circularProgress}> <CircularProgress /> </div>)}
                                            <div style={{ width: "100%", height: "100%", overflow: "hidden", display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    key={id}
                                                    src={url}
                                                    alt={nombre_elemento}
                                                    style={{ borderRadius: "20px", maxWidth: "100%", maxHeight: "100%" }}
                                                    onLoad={() => handleOutProgress()}
                                                />
                                            </div>
                                        </>
                                    ) : (
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
                    </div>
                </Box>
            )}
        </>
    );
}
