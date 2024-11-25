// components/LandingPage/Objectives.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import SchoolIcon from '@mui/icons-material/School';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: theme.shadows[6],
        },
        borderRadius: '16px',
        backgroundColor: '#fff',
    },
    icon: {
        fontSize: '3rem',
        color: '#FBBF24',
        marginBottom: theme.spacing(2),
    },
}));

const Objectives = () => {
    const classes = useStyles();

    const objectives = [
        {
            title: 'Fomentar la Comunidad',
            description:
                'Crear un espacio donde la comunidad pueda conectarse, discutir y compartir conocimientos sobre las culturas ancestrales.',
            icon: <ForumIcon className={classes.icon} />,
        },
        {
            title: 'Educación Interactiva',
            description:
                'Ofrecer herramientas educativas para la enseñanza y preservación de lenguas indígenas a través del tutor Paka.',
            icon: <SchoolIcon className={classes.icon} />,
        },
        {
            title: 'Talleres en Vivo',
            description:
                'Organizar talleres en vivo que combinen tradición y modernidad, promoviendo la identidad y evolución cultural.',
            icon: <LiveTvIcon className={classes.icon} />,
        },
    ];

    return (
        <Box sx={{ py: 8, px: 2, backgroundColor: '#f7f7f7' }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
                OBJETIVOS
            </Typography>
            <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {objectives.map((obj, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} className={classes.paper}>
                            {obj.icon}
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                {obj.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#4B2C20' }}>
                                {obj.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Objectives;
