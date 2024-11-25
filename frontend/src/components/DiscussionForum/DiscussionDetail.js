// components/DiscussionForum/DiscussionDetail.js
import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    detailContainer: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '35%',
        height: '100vh',
        backgroundColor: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        overflowY: 'auto',
        zIndex: 1300,
        transition: 'transform 0.5s ease-in-out',
        transform: 'translateX(0%)',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
    title: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    pakaIcon: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        width: 56,
        height: 56,
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
}));

const DiscussionDetail = ({ discussion, onClose }) => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const [response, setResponse] = useState('');

    const handlePakaClick = async () => {
        setOpenDialog(true);
        // Simulación de envío de datos al endpoint y recepción de respuesta
        try {
            const res = await axios.post('http://127.0.0.1:5000/foro', {
                text: discussion.content,
            });
            setResponse(res.data.response);
        } catch (error) {
            setResponse('Hubo un error al obtener la ayuda. Por favor, intenta nuevamente más tarde.');
        }
    };

    return (
        <Box className={classes.detailContainer}>
            <IconButton onClick={onClose} className={classes.closeButton}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
                {discussion.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#4B2C20', lineHeight: 1.6 }}>
                {discussion.content}
            </Typography>
            {/* Paka Icon */}
            <Avatar
                src="/images/paka-avatar.png"
                alt="Paka"
                className={classes.pakaIcon}
                onClick={handlePakaClick}
            />
            {/* Dialog for Paka's response */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Ayuda de Paka</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        {response || 'Obteniendo ayuda...'}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DiscussionDetail;
