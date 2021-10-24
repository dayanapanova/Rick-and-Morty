import React from 'react';
import {
    Card, CardContent, CardMedia, Button, Typography, Chip, Box
} from '@mui/material';

const CharacterItem = ({ image, name, status, onClick }) => (
    <Card>
        <CardMedia
            style={{ cursor: 'pointer' }}
            component="img"
            alt={name}
            image={image}
            onClick={onClick}
        />
        <CardContent>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography gutterBottom variant="h6">
                    {name}
                </Typography>
                <Chip
                    label={status}
                    color={status === 'Alive' ? 'success' : 'default'}
                    variant='outlined'
                />
            </Box>
            <Button
                onClick={onClick}
                variant="contained"
                color="primary"
                size="small"
            >
                View more
            </Button>
        </CardContent>
    </Card>
)

export default CharacterItem;
