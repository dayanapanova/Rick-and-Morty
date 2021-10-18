import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const EpisodeItem = ({ name, episode, }) => {
    return (
        <Card>
            <CardContent>
                <CardHeader
                    title={<Typography variant="body2">{name}</Typography>}
                    subheader={episode}
                />
            </CardContent>
        </Card>
    )
}

export default EpisodeItem;
