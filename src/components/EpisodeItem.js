import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

const EpisodeItem = ({ name, air_date, episode }) => {
    return (
        <Card>
            <CardContent>
                <CardHeader
                    title={name}
                    subheader={episode}
                />
            </CardContent>
        </Card>
    )
}

export default EpisodeItem;
