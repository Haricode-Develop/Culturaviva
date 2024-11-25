// components/DiscussionForum/PakaHelp.js
import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        backgroundColor: '#FBBF24',
        '&:hover': {
            backgroundColor: '#f5a623',
        },
    },
    pakaIcon: {
        width: 56,
        height: 56,
    },
}));

const PakaHelp = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState('');

    const handleClickOpen = async () => {
        setOpen(true);
        // Simulación de envío de datos al endpoint y recepción de respuesta
        try {
            const res = await axios.post('http://127.0.0.1:5000/foro', {
                content: 'Contenido del foro o discusión actual',
            });
            setResponse(res.data.response);
        } catch (error) {
            setResponse('Hubo un error al obtener la ayuda. Por favor, intenta nuevamente más tarde.');
        }
    };

    const handleClose = () => {
        setOpen(false);
        setResponse('');
    };

    return (
        <>
            <Fab className={classes.fab} onClick={handleClickOpen}>
                <img src="/images/paka-avatar.png" alt="Paka" className={classes.pakaIcon} />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Ayuda de Paka</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        {response || 'Obteniendo ayuda...'}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PakaHelp;
