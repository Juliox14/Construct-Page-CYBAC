import PropTypes from 'prop-types'; // Módulos externos
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

// Estilos
import classes from './adminList.module.scss';


export default function AdminList({
    nombreElemento,
    descripcion,
    link,
    id,
    url,
    video,
    deleteButton,
    extra,
}) {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    const handleOver = () => {
        setHover(true);
    };

    const handleOut = () => {
        setHover(false);
    };

    const handleOutProgress = () => {
        setLoading(false);
    };

    const handleDelete = async () => {
        if (extra === 'Agregar servicio') {
            const response = await axios.delete(`/api/services/${id}`);
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert(
                    'Error al eliminar el elemento, comuníquese con CYBAC TI'
                );
            }
        } else if (extra === 'Agregar proyecto') {
            console.log(id);
            const response = await axios.delete(`/api/proyects/${id}`);
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert(
                    'Error al eliminar el elemento, comuníquese con CYBAC TI'
                );
            }
        }
    };

    return (
        <div>
            {deleteButton === false || deleteButton === undefined ? (
                <Box
                    component="section"
                    className={classes.adminList_boxFatherItemList}
                    sx={{
                        position: 'relative',
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#2f2f2f6d'
                                : 'white',
                        boxShadow:
                            theme.palette.mode === 'dark'
                                ? ''
                                : '0px 0px 10px 0px rgba(0,0,0,0.1)',
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                    }}
                >
                    <Link
                        href={link}
                        onMouseOver={handleOver}
                        onMouseOut={handleOut}
                        onFocus={handleOver}
                        onBlur={handleOut}
                    />
                    {hover && (
                        <div
                            className={
                                classes.adminList_boxFatherItemList_editBox
                            }
                            style={{
                                backgroundColor:
                                    theme.palette.mode === 'dark'
                                        ? '#2f2f2fb4'
                                        : '#ffffffa4',
                            }}
                        >
                            <EditIcon
                                fontSize="large"
                                sx={{
                                    color:
                                        theme.palette.mode === 'dark'
                                            ? '#ADA479'
                                            : '#014655',
                                }}
                            />
                        </div>
                    )}
                    <Box
                        className={classes.adminList_itemList}
                        sx={{
                            color:
                                theme.palette.mode === 'dark'
                                    ? 'white'
                                    : '#014655',
                            transition: `background-color ${theme.transitions.duration.standard}ms`,
                        }}
                    >
                        <div>
                            <div>
                                {video === undefined ? (
                                    <>
                                        {loading && (
                                            <div
                                                className={
                                                    classes.adminList_itemList_circularProgress
                                                }
                                            >
                                                {' '}
                                                <CircularProgress />{' '}
                                            </div>
                                        )}
                                        <Image
                                            key={id}
                                            src={url}
                                            alt={nombreElemento}
                                            fill
                                            style={{ borderRadius: '20px' }}
                                            onLoad={() => handleOutProgress()}
                                        />
                                    </>
                                ) : (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '20px',
                                        }}
                                    >
                                        <source
                                            src="/images/admin/inicio/slider_home.mp4"
                                            type="video/mp4"
                                        />
                                        Tu navegador no soporta el elemento de
                                        video.
                                    </video>
                                )}
                            </div>
                        </div>
                        <p>
                            <strong>{nombreElemento}</strong>
                        </p>
                        <p className={classes.desc}>{descripcion}</p>
                    </Box>
                </Box>
            ) : deleteConfirm ? (
                <Box
                    component="section"
                    className={classes.adminList_boxFatherItemList}
                    sx={{
                        position: 'relative',
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#2f2f2f6d'
                                : 'white',
                        boxShadow:
                            theme.palette.mode === 'dark'
                                ? ''
                                : '0px 0px 10px 0px rgba(0,0,0,0.1)',
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '370px',
                        maxHeight: '400px',
                    }}
                >
                    <p>¿Estás seguro que quieres eliminar este elemento?</p>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            gap: '20px',
                        }}
                    >
                        <Button
                            type="button"
                            variant="contained"
                            sx={{
                                backgroundColor: '#d32f2f',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#370101',
                                    color: '#F1F1F1',
                                },
                            }}
                            onClick={handleDelete}
                        >
                            Eliminar
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            sx={{
                                backgroundColor: 'gray',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#757254',
                                    color: '#F1F1F1',
                                },
                            }}
                            onClick={() => setDeleteConfirm(false)}
                        >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box
                    component="section"
                    className={classes.adminList_boxFatherItemList}
                    sx={{
                        position: 'relative',
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#2f2f2f6d'
                                : 'white',
                        boxShadow:
                            theme.palette.mode === 'dark'
                                ? ''
                                : '0px 0px 10px 0px rgba(0,0,0,0.1)',
                        transition: `background-color ${theme.transitions.duration.standard}ms`,
                    }}
                >
                    <div onMouseOver={handleOver} onMouseOut={handleOut}>
                        {hover && (
                            <div
                                className={
                                    classes.adminServiceList_boxFatherItemList_editBox
                                }
                                style={{
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? '#2f2f2fb4'
                                            : '#ffffffa4',
                                    display: 'flex',
                                    gap: '20px',
                                }}
                            >
                                <Link href={link}>
                                    <EditIcon
                                        fontSize="large"
                                        sx={{
                                            color:
                                                theme.palette.mode === 'dark'
                                                    ? '#ADA479'
                                                    : '#014655',
                                        }}
                                    />
                                </Link>
                                <label htmlFor="delete" style={{ display: 'none' }} />
                                <button
                                    type="button"
                                    onClick={() => setDeleteConfirm(true)}
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        padding: '0',
                                        cursor: 'pointer',
                                    }}
                                    id="delete"
                                >
                                    <DeleteIcon
                                        fontSize="large"
                                        sx={{ color: '#A50505' }}
                                    />
                                </button>
                            </div>
                        )}
                        <Box
                            className={classes.adminList_itemList}
                            sx={{
                                color:
                                    theme.palette.mode === 'dark'
                                        ? 'white'
                                        : '#014655',
                                transition: `background-color ${theme.transitions.duration.standard}ms`,
                            }}
                        >
                            <div
                                style={{
                                    width: 'max-content',
                                    maxWidth: '32em',
                                    height: 'max-content',
                                }}
                            >
                                <div>
                                    {video === undefined ? (
                                        <>
                                            {loading && (
                                                <div
                                                    className={
                                                        classes.adminList_itemList_circularProgress
                                                    }
                                                >
                                                    {' '}
                                                    <CircularProgress />{' '}
                                                </div>
                                            )}
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    overflow: 'hidden',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <img
                                                    key={id}
                                                    src={url}
                                                    alt={nombreElemento}
                                                    style={{
                                                        borderRadius: '20px',
                                                        maxWidth: '100%',
                                                        maxHeight: '100%',
                                                    }}
                                                    onLoad={() =>
                                                        handleOutProgress()
                                                    }
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '20px',
                                            }}
                                        >
                                            <source
                                                src="/images/admin/inicio/slider_home.mp4"
                                                type="video/mp4"
                                            />
                                            Tu navegador no soporta el elemento
                                            de video.
                                        </video>
                                    )}
                                </div>
                            </div>
                            <p className={classes.nombreElemento}>
                                <strong>{nombreElemento}</strong>
                            </p>
                            <p className={classes.desc}>{descripcion}</p>
                        </Box>
                    </div>
                </Box>
            )}
        </div>
    );
}

AdminList.propTypes = {
    nombreElemento: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    video: PropTypes.string,
    deleteButton: PropTypes.bool,
    extra: PropTypes.string,
};