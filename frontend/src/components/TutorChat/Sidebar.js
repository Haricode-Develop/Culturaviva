// components/TutorChat/Sidebar.js
import React, { useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Collapse,
    Grid,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { makeStyles } from '@mui/styles';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        backgroundColor: '#4B2C20',
        color: 'white',
        minHeight: '100vh',
    },
    sidebar: {
        width: '100%',
        maxWidth: 240,
        position: 'fixed',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
        },
    },
    listItem: {
        '&:hover': {
            backgroundColor: '#FBBF24',
            color: '#4B2C20',
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    icon: {
        color: 'white',
    },
}));

const Sidebar = ({ groups, selectedGroupId, setSelectedGroupId }) => {
    const classes = useStyles();
    const [openGroups, setOpenGroups] = useState([]);

    const handleClick = (id) => {
        const currentIndex = openGroups.indexOf(id);
        const newOpenGroups = [...openGroups];

        if (currentIndex === -1) {
            newOpenGroups.push(id);
        } else {
            newOpenGroups.splice(currentIndex, 1);
        }
        setOpenGroups(newOpenGroups);
        setSelectedGroupId(id);
    };

    return (
        <Grid item xs={12} md={2} className={classes.sidebarContainer}>
            <div className={classes.sidebar}>
                <Typography variant="h6" sx={{ textAlign: 'center', py: 2 }}>
                    Grupos
                </Typography>
                <List>
                    {groups.map((group) => (
                        <div key={group.id}>
                            <ListItem
                                button
                                onClick={() => handleClick(group.id)}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <GroupIcon className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText primary={group.name} />
                                {openGroups.includes(group.id) ? (
                                    <ExpandLessIcon />
                                ) : (
                                    <ExpandMoreIcon />
                                )}
                            </ListItem>
                            <Collapse
                                in={openGroups.includes(group.id)}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {group.members.map((member, index) => (
                                        <ListItem
                                            button
                                            key={index}
                                            className={`${classes.listItem} ${classes.nested}`}
                                        >
                                            <ListItemText primary={member} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </div>
                    ))}
                </List>
            </div>
        </Grid>
    );
};

export default Sidebar;
