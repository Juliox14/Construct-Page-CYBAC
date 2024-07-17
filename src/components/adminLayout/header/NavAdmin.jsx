import classes from "./header.module.scss";
import MovilDropDown from "./MovilDropdown";
import { useContext, useEffect, useState } from 'react';
import ColorModeContext from "../../../context/contexDarkMode";
import Notifications from "./notifications";

//Importaciones de la libreria de frameMotion
import { motion } from "framer-motion";

// Componentes de Mui/matterial
import Avatar from "@mui/material/Avatar";
import { useTheme } from '@mui/material/styles';

// Importanciones de imagenes e iconos
import AdminLogo from "../../../../public/Admin.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function NavAdmin() {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [hidden, setHidden] = useState(true);
    const [lock, setLock] = useState(false);

    const handleLockHeader = () => {
        if(lock) return
        else setHidden(true)
    }
    

    return (
        <>
            <header className={classes.movilHeaderElement}>
                { /* Movile design */}
                <nav className={classes.movilHeaderElement_boxContainerOfNavAdmin}>
                    <MovilDropDown />
                </nav>
            </header>

            <motion.div className={classes.desktopFalseBoxHeader}
            variants={{
            visible: {
                width: "20%",
            }}}
            animate={hidden ? "" : "visible"}
            onMouseOver={() => setHidden(false)}
            onMouseOut={() => handleLockHeader()}>
                <motion.header className={classes.desktopHeaderElement}
                    variants={{
                    visible: {
                        width: "20%",
                    },
                    changeColor: {
                        backgroundColor: "#171717",
                        transition: { duration: 0.3 },
                    },}}
                    animate={[
                        hidden ? "" : "visible",
                        theme.palette.mode === "dark" ? "changeColor" : "",
                    ]}
                    onMouseOver={() => setHidden(false)}
                    onMouseOut={() => handleLockHeader()}></motion.header>
                    
                    <motion.nav className={classes.desktopHeaderElement_boxContainerOfNavAdmin}
                    variants={{
                        visible: {
                            width: "20%",
                        },
                        hidden: {
                            
                        }}}
                    animate={hidden ? "hidden" : "visible"}>
                        <div>
                            <div className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxHeader}>
                                <Avatar alt="Logo Admin" src={AdminLogo.src} sx={{ width: 56, height: 56 }}/>
                                <div style={{position: "relative", height: "30px", width: "100%", overflow: "hidden"}}>
                                    <motion.h3 variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            opacity: 0,
                                            transition: { duration: 0.01 }
                                        }}}
                                        animate={hidden ? "hidden" : "visible"}>
                                            
                                            Gunther Nettel
                                        
                                    </motion.h3>
                                </div>
                            </div>
                            <motion.div 
                            variants={{
                                visible: {
                                    width: "100%",
                                    opacity: 1,
                                },
                                hidden: {
                                    opacity: 0,
                                    transition: { duration: 0.01 }
                                }}}
                                animate={hidden ? "hidden" : "visible"}
                                className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxIcons}>
                                <SearchIcon />
                                <IconButton onClick={() => setLock((prev) => (!prev))} color="inherit" sx={{padding: 0}}>
                                    {lock ? <LockIcon/> : <LockOpenIcon />}
                                </IconButton>
                                <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{padding: 0}}>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                <Notifications email={'integraciones@reichstag.com.mx'}/>
                            </motion.div>
                        </div>

                        <motion.ul className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxUl}
                        variants={{
                            hidden: {
                                overflow: "hidden",
                                maxHeight: "60%",
                            }}}
                            animate={hidden ? "hidden" : ""}>
                            <li>
                                <HomeIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                        Inicio
                                    
                                    </motion.a>
                            </li>
                            <li>
                                <InfoIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                    Nosotros
                                    
                                </motion.a>
                            </li>
                            <li>
                                <InventoryIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                    Servicios
                                    
                                </motion.a>
                            </li>
                            <li>
                                <PrecisionManufacturingIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                        Proyectos
                                        
                                </motion.a>
                            </li>
                            <li>
                                <PeopleIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                        Clientes
                                    
                                    </motion.a>
                            </li>
                            <li>
                                <ContactsIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                        Contacto
                                        
                                    </motion.a>
                            </li>
                            <li>
                                <ContactsIcon />
                                <motion.a href="#"
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    hidden: {
                                        width: 0,
                                        opacity: 0,
                                    }}}
                                    animate={hidden ? "hidden" : "visible"}>
                                        
                                        Footer
                                    
                                    </motion.a>
                            </li>
                        </motion.ul>
                    </motion.nav>
            </motion.div>
        </>
    )
}