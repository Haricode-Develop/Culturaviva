// components/TutorChat/TutorChat.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { Grid } from '@mui/material';

const TutorChat = () => {
    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const groups = [
        {
            id: 1,
            name: 'Grupo 1',
            members: ['Ana', 'Luis', 'María'],
        },
        {
            id: 2,
            name: 'Grupo 2',
            members: ['Carlos', 'Sofía', 'Miguel'],
        },
        {
            id: 3,
            name: 'Grupo 3',
            members: ['Laura', 'José', 'Elena'],
        },
    ];

    const selectedGroup = groups.find((group) => group.id === selectedGroupId);

    return (
        <Grid container>
            <Sidebar
                groups={groups}
                selectedGroupId={selectedGroupId}
                setSelectedGroupId={setSelectedGroupId}
            />
            <ChatWindow selectedGroup={selectedGroup} />
        </Grid>
    );
};

export default TutorChat;
