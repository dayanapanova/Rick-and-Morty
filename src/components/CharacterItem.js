import React from 'react';
import { Card, CardContent, CardHeader, Avatar } from '@mui/material';

const CharacterItem = ({ image, name, status }) => {
    return (
        <Card>
            <CardContent>
                <CardHeader
                    avatar={<Avatar src={image} />}
                    title={name}
                    subheader={status}
                />
            </CardContent>
        </Card>
    )
}

export default CharacterItem;
