import React from 'react';
import {
    Avatar,
    List as MiuList,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
} from '@mui/material'

const List = ({ items }) => {
    return (
        <MiuList>
            {items.map(({ name, value, icon: Icon }) => value ? (
                <div key={`list-item-${name}`}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Icon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={name} secondary={value} />
                    </ListItem>

                    <Divider />
                </div>
            ) : null)}
        </MiuList>
    );
}

export default List
