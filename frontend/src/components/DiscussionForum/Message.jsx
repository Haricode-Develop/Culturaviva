// src/components/DiscussionForum/Message.jsx
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const Message = ({ sender, avatar, text, timestamp }) => {
    const isUser = sender === 'user';

    return (
        <Box className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            {!isUser && (
                <Avatar src={avatar} alt={sender} className="mr-2" />
            )}
            <Box
                className={`max-w-md p-3 rounded-lg ${
                    isUser ? 'bg-naranjaSuave text-white' : 'bg-grisClaro text-negroSuave'
                }`}
            >
                <Typography variant="body1">{text}</Typography>
                <Typography variant="caption" className="block text-right mt-1">
                    {timestamp}
                </Typography>
            </Box>
            {isUser && (
                <Avatar src={avatar} alt={sender} className="ml-2" />
            )}
        </Box>
    );
};

export default Message;
