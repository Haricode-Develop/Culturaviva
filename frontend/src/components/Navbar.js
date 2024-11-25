// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';
import SchoolIcon from '@mui/icons-material/School';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, useTheme } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#4B2C20',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    navItem: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        marginLeft: theme.spacing(4),
        position: 'relative',
        '&:hover': {
            color: '#FBBF24',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '2px',
            bottom: '-4px',
            left: '50%',
            backgroundColor: '#FBBF24',
            transition: 'all 0.3s ease-in-out',
        },
        '&:hover::after': {
            width: '100%',
            left: '0%',
        },
    },
    activeNavItem: {
        color: '#FBBF24',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: 240,
    },
    drawerContainer: {
        padding: theme.spacing(2),
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: 'Inicio', icon: <HomeIcon />, path: '/' },
        { text: 'Foro', icon: <ForumIcon />, path: '/foro' },
        { text: 'Tutor', icon: <SchoolIcon />, path: '/tutor' },
        { text: 'Talleres', icon: <LiveTvIcon />, path: '/talleres' },
    ];

    const drawer = (
        <div className={classes.drawerContainer}>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} component={Link} to={item.path} onClick={handleDrawerToggle}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link to="/" className={classes.logo}>
                    <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
                    Cultura Viva
                </Link>
                <div className={classes.navLinks}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.text}
                            to={item.path}
                            className={`${classes.navItem} ${location.pathname === item.path ? classes.activeNavItem : ''}`}
                        >
                            {item.icon}
                            {item.text}
                        </Link>
                    ))}
                </div>
                {isMobile && (
                    <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
