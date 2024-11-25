// components/LandingPage/Description.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Description = () => {
    return (
        <Box sx={{ backgroundColor: '#f7f7f7', py: 8, px: 2 }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
                DESCRIPCIÓN
            </Typography>
            <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" sx={{ color: '#4B2C20', fontSize: '1.2rem', lineHeight: 1.6 }}>
                        <strong>CulturaViva</strong> es una plataforma donde las raíces ancestrales florecen con fuerza
                        en el presente, conectando tradición y modernidad en una celebración eterna de identidad y
                        evolución. Nuestra misión es preservar y promover las lenguas indígenas a través de herramientas
                        educativas interactivas y talleres en vivo.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src="/images/description.jpg"
                        alt="Descripción"
                        style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Description;
