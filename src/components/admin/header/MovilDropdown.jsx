import classes from './header.module.scss';
import { useState } from 'react';
import {
    IconButton,
    Drawer,
    Typography,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MovilDropDown() {
    const drawerWidth = 240;
    const navItems = [
        'Inicio',
        'Nosotros',
        'Servicios',
        'Proyectos',
        'Clientes',
        'Contacto',
    ];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ backgroundColor: '#ADA479', py: 2, color: '#014655' }}>
                <h2 style={{ marginBottom: 0 }}>Menú</h2>
            </Box>

            <hr style={{ marginTop: 0, borderWidth: 2 }} />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center', color: 'white' }}
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
        <List>
            {['Cerrar sesión'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} onClick={cerrarSesion}>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List> */}
        </Box>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        backgroundColor: '#014655',
                    },
                }}
            >
                {drawer}
            </Drawer>

            <IconButton
                className="lg:hidden"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
            >
                <MenuIcon
                    sx={{ fontSize: 30 }}
                    className={
                        classes.movilHeaderElement_boxContainerOfNavAdmin_iconNav
                    }
                />
            </IconButton>
        </>
    );
}
