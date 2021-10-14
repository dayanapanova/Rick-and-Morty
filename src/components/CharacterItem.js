import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

const CharacterItem = ({ image, name, status }) => {
    return (
        <Card>
            <CardContent>
                <CardHeader
                    avatar={<Avatar src={image} />}
                    title={<Typography variant="body2">{name}</Typography>}
                    subheader={status}
                />
            </CardContent>
        </Card>
    )
}

export default CharacterItem;
