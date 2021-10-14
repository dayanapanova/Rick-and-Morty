import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

const CharacterInfo = ({ name, status, species }) => {
    return (
        <Card>
            <CardContent>
                <CardHeader
                    title={<Typography variant="body2">{name}</Typography>}
                    subheader={status}
                    species={species}
                />
            </CardContent>
        </Card>
    )
}

export default CharacterInfo;