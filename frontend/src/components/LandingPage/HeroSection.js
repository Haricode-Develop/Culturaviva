// components/LandingPage/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundImage: "url('/images/masks.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: { xs: '70vh', md: '100vh' },
                color: 'white',
                overflow: 'hidden',
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
            />
            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: 2,
                    animation: 'fadeIn 2s ease-in-out',
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '3rem', md: '6rem' },
                        mb: 2,
                    }}
                >
                    CULTURA{' '}
                    <span style={{ color: '#FBBF24' }}>VIVA</span>
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Donde las raíces ancestrales florecen en el presente
                </Typography>
            </Box>
        </Box>
    );
};

export default HeroSection;
