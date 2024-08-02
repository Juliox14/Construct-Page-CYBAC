import classes from "./header.module.scss";
import { useContext, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";

// Componentes personalizados
import MovilDropDown from "./MovilDropdown";
import ColorModeContext from "../../../context/contexDarkMode";
import Notifications from "./notifications";

//Importaciones de la libreria de frameMotion
import { motion } from "framer-motion";

// Componentes de Mui/matterial
import { useTheme } from '@mui/material/styles';

// Importanciones de imagenes e iconos
import AdminLogo from "../../../../public/Admin.jpeg";
import AdminHeader from "../../../../public/images/logo/white_golden.png";
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
import ExploreIcon from '@mui/icons-material/Explore';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Cookies from "js-cookie";

export default function NavAdmin() {

    const { pathname } = useRouter();
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [hidden, setHidden] = useState(true);
    const [lock, setLock] = useState(false);

    const handleLockHeader = () => {
        if(lock) return
        else {
           setHidden(true);
        }
    }

    const [backgroundNavBar, setBackgroundNavBar] = useState(null);
    const [lockCookie, setLockCookie] = useState(null);

    useEffect(() => {
        const darkMode = Cookies.get("darkMode") === 'dark';
        const lock = Cookies.get("lock") === 'true';
        setLockCookie(lock);
        setHidden(!lock);
        setLock(lock);
        setBackgroundNavBar(darkMode ? "#171717" : "#014655");
    }, []);

    if (backgroundNavBar === null && lockCookie === null) return null;
    

    return (
        <>
            <header className={classes.movilHeaderElement}>
                { /* Movile design */}
                <nav className={classes.movilHeaderElement_boxContainerOfNavAdmin}>
                    <MovilDropDown />
                </nav>
            </header>

            <motion.div className={classes.desktopFalseBoxHeader}
            initial={{ width: Cookies.get("lock") === "true" ? "20%" : "4.5em" }}
            variants={{
            visible: {
                width: "20%",
            }}}
            animate={hidden ? "" : "visible"}
            onMouseOver={() => setHidden(false)}
            onMouseOut={() => handleLockHeader()}>
                <motion.header className={classes.desktopHeaderElement}
                    initial={{ width: Cookies.get("lock") === "true" ? "20%" : "4.5em", backgroundColor: backgroundNavBar }}
                    variants={{
                    visible: {
                        width: "20%",
                    },
                    hidden: {
                        width: "4.5em",
                    },
                    changeColor: {
                        backgroundColor: "#171717",
                        transition: { duration: 0.3 },
                    }, 
                    changeColorLight: {
                        backgroundColor: "#013641",
                        transition: { duration: 0.01 }
                    },}}
                    animate={[
                        hidden ? "hidden" : "visible",
                        theme.palette.mode === "dark" ? "changeColor" : "changeColorLight",
                    ]}
                    onMouseOver={() => setHidden(false)}
                    onMouseOut={() => handleLockHeader()}></motion.header>
                    
                    <motion.nav className={classes.desktopHeaderElement_boxContainerOfNavAdmin}
                    initial={{ width: Cookies.get("lock") === "true" ? "20%" : "4.4em" }}
                    variants={{ visible: { width: "20%" }, hidden: { width: "4.5em"}}}
                    animate={hidden ? "hidden" : "visible"}>
                        <div>
                            <div className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxHeader}>
                                <motion.div
                                initial={{
                                    width: "70%",
                                    overflow: "hidden",
                                }}
                                variants={{
                                    hidden: {
                                        width: "75%"
                                    }}}
                                    animate={hidden ? "hidden" : ""}>

                                    <motion.img alt="Logo Admin" src={AdminHeader.src}
                                    initial={{
                                        minWidth: "14em",
                                        height: "3.5em",
                                    }}/>
                                </motion.div>

                                <motion.img alt="Logo Admin" src={AdminLogo.src} className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxHeader_imgUser}
                                initial={{
                                    width: Cookies.get("lock") === "true" ? "3.5em" : "2.5em",
                                    height: Cookies.get("lock") === "true" ? "3.5em" : "2.5em",
                                }}
                                variants={{
                                    visible: {
                                        width: "3.5em",
                                        height: "3.5em",
                                    }}}
                                    animate={hidden ? "" : "visible"}/>

                                <div style={{position: "relative", height: "30px", width: "100%", overflow: "hidden"}}>
                                    <motion.h3 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
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
                            initial={{ width: Cookies.get("lock") === "true" ? "100%" : 0, opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
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
                                <IconButton onClick={() => {setLock((prev) => {
                                    Cookies.set("lock", !prev);
                                    return (!prev)
                                })}} color="inherit" sx={{padding: 0}}>
                                    {lock ? <LockIcon/> : <LockOpenIcon />}
                                </IconButton>
                                <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{padding: 0}}>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                <Notifications/>
                            </motion.div>
                        </div>

                        <motion.ul className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxUl}
                        initial={{
                            marginTop: Cookies.get("lock") === "true" ? "35px" : "-20px",
                        }}
                        variants={{
                            hidden: {
                                marginTop: "-20px",
                                overflow: "initial",
                            },
                            visible: {
                                marginTop: "35px",
                            }}}
                            animate={hidden ? "hidden" : "visible"}>
                            <a href="http://localhost:3000/admin" style={{ backgroundColor: pathname === "/admin" ? "#ADA479" : ""}}>
                                    <HomeIcon />
                                    <motion.li 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Inicio
                                    </motion.li>
                            </a>
                            <a href="http://localhost:3000/admin/nosotros" style={{ backgroundColor: pathname === "/admin/nosotros" ? "#ADA479" : ""}}>
                                    <InfoIcon />
                                    <motion.li 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Nosotros
                                    </motion.li>
                            </a>
                            <a href="http://localhost:3000/admin/servicio" style={{ backgroundColor: pathname === "/admin/servicio" ? "#ADA479" : ""}}>
                                    <InventoryIcon />
                                    <motion.li 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Servicio
                                    </motion.li>
                            </a>
                            <a href="http://localhost:3000/admin/proyecto" style={{ backgroundColor: pathname === "/admin/proyecto" ? "#ADA479" : ""}}>
                                    <PrecisionManufacturingIcon />
                                    <motion.li 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Proyecto
                                    </motion.li>
                            </a>
                            <a href="http://localhost:3000/admin/clientes" style={{ backgroundColor: pathname === "/admin/clientes" ? "#ADA479" : ""}}>
                                    <ContactsIcon />
                                    <motion.li 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Clientes
                                    </motion.li>
                            </a>
                            <a href="http://localhost:3000/admin/contacto" style={{ backgroundColor: pathname === "/admin/contacto" ? "#ADA479" : ""}}>
                                    <PeopleIcon />
                                    <motion.li
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Contacto
                                    </motion.li>
                            </a>
                            <a href="http://localhost:3000/admin/footer" style={{ backgroundColor: pathname === "/admin/footer" ? "#ADA479" : ""}}>
                                    <CallToActionIcon />
                                    <motion.li 
                                    initial={{ opacity: Cookies.get("lock") === "true" ? 1 : 0 }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            width: 0,
                                            opacity: 0,
                                        }
                                    }}
                                    animate={hidden ? "hidden" : "visible"}>
                                        Footer
                                    </motion.li>
                            </a>
                        </motion.ul>
                    </motion.nav>
            </motion.div>
        </>
    )
}