import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

const CharacterItem = ({ image, name, status, onClick }) => {
    return (
        <Card>
            <CardContent>
                <CardHeader
                    onClick={onClick}
                    avatar={<Avatar src={image} />}
                    title={<Typography variant="body2">{name}</Typography>}
                    subheader={status}
                />
            </CardContent>
        </Card>
    )
}

export default CharacterItem;
