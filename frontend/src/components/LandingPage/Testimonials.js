// components/LandingPage/Testimonials.js
import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles((theme) => ({
    testimonialCard: {
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
    avatar: {
        margin: '0 auto',
        marginBottom: theme.spacing(2),
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    starIcon: {
        color: '#FBBF24',
    },
}));

const Testimonials = () => {
    const classes = useStyles();

    const testimonials = [
        {
            name: 'Juan Pérez',
            image: '/images/user1.jpg',
            feedback:
                'CulturaViva me ha permitido reconectar con mis raíces y aprender más sobre mi herencia cultural.',
        },
        {
            name: 'María López',
            image: '/images/user2.jpg',
            feedback:
                'Los talleres en vivo son increíbles. He aprendido tanto sobre las lenguas indígenas.',
        },
        {
            name: 'Carlos García',
            image: '/images/user3.jpg',
            feedback:
                'La comunidad es muy acogedora y siempre está dispuesta a ayudar y compartir conocimientos.',
        },
    ];

    return (
        <Box sx={{ py: 8, px: 2, backgroundColor: '#fff' }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
                Testimonios
            </Typography>
            <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} className={classes.testimonialCard}>
                            <Avatar
                                src={testimonial.image}
                                alt={testimonial.name}
                                className={classes.avatar}
                            />
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {testimonial.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#4B2C20', mb: 2 }}>
                                {testimonial.feedback}
                            </Typography>
                            <Box>
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className={classes.starIcon} />
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Testimonials;
