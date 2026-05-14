// src/components/DiscussionForum/DiscussionDetail.jsx
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
    TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import Message from './Message';

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
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#4B2C20',
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
    messagesContainer: {
        maxHeight: '70vh',
        overflowY: 'auto',
        marginBottom: theme.spacing(2),
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    textField: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
    },
}));

const DiscussionDetail = ({ discussion, onClose }) => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const [response, setResponse] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: 'tutor',
            avatar: '/images/tutor-avatar.png', // Ruta de la imagen del tutor
            text: '¡Hola! ¿En qué puedo ayudarte hoy?',
            timestamp: '10:00 AM',
        },
        {
            sender: 'user',
            avatar: '/images/user-avatar.png', // Ruta de la imagen del usuario
            text: 'Hola, tengo una pregunta sobre los talleres.',
            timestamp: '10:05 AM',
        },
        // Puedes agregar más mensajes iniciales si lo deseas
    ]);
    const [input, setInput] = useState('');

    const handlePakaClick = async () => {
        setOpenDialog(true);
        // Simulación de envío de datos al endpoint y recepción de respuesta
        try {
            const res = await axios.post('https://culturaviva.onrender.com/foro', {
                text: discussion.content,
            });
            setResponse(res.data.response);
        } catch (error) {
            setResponse('Hubo un error al obtener la ayuda. Por favor, intenta nuevamente más tarde.');
        }
    };

    const handleSend = () => {
        if (input.trim() === '') return;
        const newMessage = {
            sender: 'user',
            avatar: '/images/user-avatar.png',
            text: input,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, newMessage]);
        setInput('');

        // Simular una respuesta automática del tutor
        setTimeout(() => {
            const tutorMessage = {
                sender: 'tutor',
                avatar: '/images/tutor-avatar.png',
                text: 'Estoy aquí para ayudarte. ¿Puedes especificar tu pregunta?',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, tutorMessage]);
        }, 1000);
    };

    return (
        <Box className={classes.detailContainer}>
            <IconButton onClick={onClose} className={classes.closeButton}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
                {discussion.title}
            </Typography>
            <Box className={classes.messagesContainer}>
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        sender={msg.sender}
                        avatar={msg.avatar}
                        text={msg.text}
                        timestamp={msg.timestamp}
                    />
                ))}
            </Box>
            {/* Entrada de Texto para Enviar Mensajes */}
            <Box className={classes.inputContainer}>
                <TextField
                    variant="outlined"
                    placeholder="Escribe tu mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={classes.textField}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Enviar
                </Button>
            </Box>
            {/* Icono de Paka */}
            <Avatar
                src="/images/paka-avatar.png"
                alt="Paka"
                className={classes.pakaIcon}
                onClick={handlePakaClick}
            />
            {/* Dialog para la respuesta de Paka */}
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
