// components/LiveWorkshops/LiveWorkshops.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    workshopCard: {
        position: 'relative',
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: theme.shadows[6],
        },
        borderRadius: '16px',
    },
    liveBadge: {
        position: 'absolute',
        top: theme.spacing(2),
        left: theme.spacing(2),
        backgroundColor: '#F44336',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: '4px',
    },
    timeChip: {
        marginTop: theme.spacing(1),
    },
    workshopImage: {
        height: 200,
    },
}));

const LiveWorkshops = () => {
    const classes = useStyles();

    const workshops = [
        {
            id: 1,
            title: 'Taller de Lenguas Ancestrales',
            image: '/images/img1.jpg',
            time: '10:00 AM - 12:00 PM',
            live: true,
        },
        {
            id: 2,
            title: 'Danza Tradicional en Vivo',
            image: '/images/img2.jpg',
            time: '2:00 PM - 4:00 PM',
            live: false,
        },
        {
            id: 3,
            title: 'Cerámica Ancestral',
            image: '/images/img3.jpg',
            time: '6:00 PM - 8:00 PM',
            live: true,
        },
        {
            id: 4,
            title: 'Música Indígena',
            image: '/images/img4.jpg',
            time: '5:00 PM - 7:00 PM',
            live: false,
        },
    ];

    return (
        <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
                Talleres en Vivo
            </Typography>
            <Typography
                variant="h6"
                component="p"
                sx={{ textAlign: 'center', mb: 6, color: '#666' }}
            >
                Únete a nuestros talleres en vivo y participa en experiencias culturales únicas
            </Typography>
            <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {workshops.map((workshop) => (
                    <Grid item xs={12} sm={6} md={4} key={workshop.id}>
                        <Card className={classes.workshopCard}>
                            <CardMedia
                                image={workshop.image}
                                title={workshop.title}
                                className={classes.workshopImage}
                            />
                            {workshop.live && (
                                <div className={classes.liveBadge}>
                                    <LiveTvIcon fontSize="small" sx={{ mr: 0.5 }} />
                                    En Vivo
                                </div>
                            )}
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    {workshop.title}
                                </Typography>
                                <Chip
                                    icon={<AccessTimeIcon />}
                                    label={workshop.time}
                                    variant="outlined"
                                    color="default"
                                    className={classes.timeChip}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LiveWorkshops;
