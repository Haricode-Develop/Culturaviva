// components/TutorChat/ChatWindow.js
import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    TextField,
    IconButton,
    Typography,
    Avatar,
    Paper,
    Grid,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    chatContainer: {
        padding: theme.spacing(4),
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    messagesContainer: {
        flex: 1,
        overflowY: 'auto',
        marginBottom: theme.spacing(2),
    },
    messageRow: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: theme.spacing(2),
    },
    messageBubble: {
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        maxWidth: '70%',
        position: 'relative',
        animation: '$fadeIn 0.5s',
    },
    userMessage: {
        backgroundColor: '#FBBF24',
        color: 'white',
        marginLeft: 'auto',
        borderTopRightRadius: 0,
    },
    pakaMessage: {
        backgroundColor: '#e0e0e0',
        color: '#333',
        marginRight: 'auto',
        borderTopLeftRadius: 0,
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    inputField: {
        flex: 1,
    },
    messageInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(0.5),
    },
    senderName: {
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: '0.75rem',
        color: '#888',
    },
    pakaAvatar: {
        backgroundColor: '#FBBF24',
        width: 48,
        height: 48,
    },
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
}));

const ChatWindow = ({ selectedGroup }) => {
    const classes = useStyles();
    const [messages, setMessages] = useState([
        {
            sender: 'Paka',
            text: '¡Hola! Soy Paka, tu asistente virtual de CulturaViva. ¿En qué puedo ayudarte hoy?',
            timestamp: moment().format('LT'),
        },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const sendMessage = async () => {
        if (input.trim() !== '') {
            const newMessage = {
                sender: 'Tú',
                text: input,
                timestamp: moment().format('LT'),
            };
            setMessages((prev) => [...prev, newMessage]);
            setInput('');
            // Enviar mensaje al endpoint y obtener respuesta
            try {
                const res = await axios.post('https://culturaviva.onrender.com/tutor', {
                    text: input,
                });
                const response = {
                    sender: 'Paka',
                    text: res.data.response,
                    timestamp: moment().format('LT'),
                };
                setMessages((prev) => [...prev, response]);
            } catch (error) {
                const errorMessage = {
                    sender: 'Paka',
                    text: 'Hubo un error al obtener la respuesta. Por favor, intenta nuevamente más tarde.',
                    timestamp: moment().format('LT'),
                };
                setMessages((prev) => [...prev, errorMessage]);
            }
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <Grid item xs={12} md={10}>
            <Box className={classes.chatContainer}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    {selectedGroup ? `Chat - ${selectedGroup.name}` : 'Chat con Paka'}
                </Typography>
                <Box className={classes.messagesContainer}>
                    {messages.map((msg, index) => (
                        <Box key={index} className={classes.messageRow}>
                            {msg.sender !== 'Tú' && (
                                <>
                                    <Avatar
                                        src="/images/paka-avatar.png"
                                        alt="Paka"
                                        className={classes.pakaAvatar}
                                    />
                                    <div>
                                        <div className={classes.messageInfo}>
                                            <Typography
                                                variant="body2"
                                                className={classes.senderName}
                                            >
                                                {msg.sender}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className={classes.timestamp}
                                            >
                                                {msg.timestamp}
                                            </Typography>
                                        </div>
                                        <Paper
                                            className={`${classes.messageBubble} ${classes.pakaMessage}`}
                                            elevation={1}
                                        >
                                            <Typography variant="body1">
                                                {msg.text}
                                            </Typography>
                                        </Paper>
                                    </div>
                                </>
                            )}
                            {msg.sender === 'Tú' && (
                                <>
                                    <div style={{ flexGrow: 1 }} />
                                    <div>
                                        <div
                                            className={classes.messageInfo}
                                            style={{ justifyContent: 'flex-end' }}
                                        >
                                            <Typography
                                                variant="body2"
                                                className={classes.timestamp}
                                            >
                                                {msg.timestamp}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className={classes.senderName}
                                                style={{ marginLeft: '8px' }}
                                            >
                                                {msg.sender}
                                            </Typography>
                                        </div>
                                        <Paper
                                            className={`${classes.messageBubble} ${classes.userMessage}`}
                                            elevation={3}
                                        >
                                            <Typography variant="body1">
                                                {msg.text}
                                            </Typography>
                                        </Paper>
                                    </div>
                                    <Avatar>{/* User avatar or initials */}</Avatar>
                                </>
                            )}
                        </Box>
                    ))}
                    <div ref={messagesEndRef} />
                </Box>
                <Box className={classes.inputContainer}>
                    <TextField
                        variant="outlined"
                        placeholder="Escribe un mensaje..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className={classes.inputField}
                    />
                    <IconButton color="primary" onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    );
};

export default ChatWindow;
