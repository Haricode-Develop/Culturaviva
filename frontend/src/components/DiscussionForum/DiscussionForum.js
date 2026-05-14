// components/DiscussionForum/DiscussionForum.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DiscussionsList from './DiscussionsList';
import { Grid } from '@mui/material';

const DiscussionForum = () => {
    const [selectedDiscussion, setSelectedDiscussion] = useState(null);

    return (
        <Grid container>
            <Sidebar />
            <DiscussionsList
                selectedDiscussion={selectedDiscussion}
                setSelectedDiscussion={setSelectedDiscussion}
            />
        </Grid>
    );
};

export default DiscussionForum;
