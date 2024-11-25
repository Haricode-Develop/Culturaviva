// components/DiscussionForum/PakaHelp.js
import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            backgroundColor: '#f5a623',
            transform: 'scale(1.1)',

        },
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',

    },
}));

const PakaHelp = ({ discussionContent }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState('');

    const handleClickOpen = async () => {
        setOpen(true);
        // Enviar el contenido de la discusión al endpoint
        try {
            const res = await axios.post('http://127.0.0.1:5000/foro', {
                text: discussionContent,
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
                <HelpIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                transitionDuration={700}
                aria-labelledby="paka-help-dialog-title"
            >
                <DialogTitle id="paka-help-dialog-title">Ayuda de Paka</DialogTitle>
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
