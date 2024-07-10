import classes from "./header.module.scss";
import MovilDropDown from "./MovilDropdown";
import Image from "next/image";
import Link from "next/link";
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from "../../../context/contexDarkMode";


import AdminLogo from "../../../../public/Admin.png";
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function NavAdmin() {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <>
            <header className={classes.movilHeaderElement}>
                { /* Movile design */}
                <nav className={classes.movilHeaderElement_boxContainerOfNavAdmin}>
                    <MovilDropDown />
                </nav>
            </header>

            <header className={classes.desktopHeaderElement}>
                <nav className={classes.desktopHeaderElement_boxContainerOfNavAdmin}>
                    <div>
                        <div className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxHeader}>
                            <Image src={AdminLogo.src} alt="Logo" width={60} height={60} priority={true}/>
                            <h3>Gunther Nettel</h3>
                        </div>
                        <div>
                            <SearchIcon />
                            <LockIcon />
                            <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{padding: 0}}>
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                            <NotificationsIcon />
                        </div>
                    </div>

                    <ul className={classes.desktopHeaderElement_boxContainerOfNavAdmin_boxUl}>
                        <li>
                            <HomeIcon />
                            <Link href="#">Inicio</Link>
                        </li>
                        <li>
                            <InfoIcon />
                            <Link href="#">Nosotros</Link>
                        </li>
                        <li>
                            <InventoryIcon />
                            <Link href="#">Servicios</Link>
                        </li>
                        <li>
                            <PrecisionManufacturingIcon />
                            <Link href="#">Proyectos</Link>
                        </li>
                        <li>
                            <PeopleIcon />
                            <Link href="#">Clientes</Link>
                        </li>
                        <li>
                            <ContactsIcon />
                            <Link href="#">Contacto</Link>
                        </li>
                        <li>
                            <ContactsIcon />
                            <Link href="#">Footer</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}