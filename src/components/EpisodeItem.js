import React from 'react';
import {
    Card, CardContent, CardHeader, Chip, Avatar, Box, Typography
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const EpisodeItem = ({ name, episode, air_date }) => (
    <Card variant='outlined'>
        <CardContent>
            <CardHeader
                title={<Typography>{name}</Typography>}
                avatar={
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {name.substring(0, 1)}
                    </Avatar>
                }
                subheader={
                    <>
                        <div>
                            {air_date}
                        </div>
                        <Box mt={1}>
                            <Chip size='small' label={episode} />
                        </Box>
                    </>
                }
            />
        </CardContent>
    </Card>
)

export default EpisodeItem;
