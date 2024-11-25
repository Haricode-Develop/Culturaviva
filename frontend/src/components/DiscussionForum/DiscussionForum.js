// components/DiscussionForum/DiscussionForum.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DiscussionsList from './DiscussionsList';
import PakaHelp from './PakaHelp';
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
            {selectedDiscussion && <PakaHelp discussionContent={selectedDiscussion.content} />}
        </Grid>
    );
};

export default DiscussionForum;
