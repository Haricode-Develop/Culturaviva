// components/DiscussionForum/Sidebar.js
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Collapse,
    Grid,
} from '@mui/material';
import TopicIcon from '@mui/icons-material/Topic';
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

const Sidebar = () => {
    const classes = useStyles();
    const [openTopics, setOpenTopics] = React.useState([]);

    const topics = [
        {
            name: 'Lenguas Indígenas',
            subtopics: ['Preservación', 'Educación', 'Recursos'],
        },
        {
            name: 'Eventos Culturales',
            subtopics: ['Festivales', 'Ceremonias', 'Arte'],
        },
        {
            name: 'Proyectos Comunitarios',
            subtopics: ['Infraestructura', 'Salud', 'Educación'],
        },
    ];

    const handleClick = (index) => {
        const currentIndex = openTopics.indexOf(index);
        const newOpenTopics = [...openTopics];

        if (currentIndex === -1) {
            newOpenTopics.push(index);
        } else {
            newOpenTopics.splice(currentIndex, 1);
        }
        setOpenTopics(newOpenTopics);
    };

    return (
        <Grid item xs={12} md={2} className={classes.sidebarContainer}>
            <div className={classes.sidebar}>
                <Typography variant="h6" sx={{ textAlign: 'center', py: 2 }}>
                    Tópicos
                </Typography>
                <List>
                    {topics.map((topic, index) => (
                        <div key={index}>
                            <ListItem
                                button
                                onClick={() => handleClick(index)}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <TopicIcon className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText primary={topic.name} />
                                {openTopics.includes(index) ? (
                                    <ExpandLessIcon />
                                ) : (
                                    <ExpandMoreIcon />
                                )}
                            </ListItem>
                            <Collapse
                                in={openTopics.includes(index)}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {topic.subtopics.map((subtopic, subIndex) => (
                                        <ListItem
                                            button
                                            key={subIndex}
                                            className={`${classes.listItem} ${classes.nested}`}
                                        >
                                            <ListItemText primary={subtopic} />
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
