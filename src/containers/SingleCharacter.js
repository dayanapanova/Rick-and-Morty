import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box, Container, Tabs, Tab, Typography, Card, Grid, Avatar
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCharacter } from '../store/CharacterSlice';
import { List } from '../components';
import PublicIcon from '@mui/icons-material/Public';
import WcIcon from '@mui/icons-material/Wc';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonIcon from '@mui/icons-material/Person';

const SingleCharacter = () => {
    const params = useParams();
    const characterID = params?.id;
    const dispatch = useDispatch();
    const { characters: { singleCharacter } } = useSelector((state) => state);

    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => setValue(newValue);

    useEffect(() => {
        if (characterID) {
            dispatch(getSingleCharacter(characterID));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [characterID]);

    const {
        name,
        image,
        status,
        species,
        type,
        gender,
        location,
        origin,
    } = singleCharacter ?? {};


    const TABS = [
        {
            label: 'General info',
            items: [
                {
                    name: 'status',
                    value: status,
                    icon: ContactSupportIcon,
                },
                {
                    name: 'species',
                    value: species,
                    icon: RecentActorsIcon,
                },
                {
                    name: 'type',
                    value: type,
                    icon: PublicIcon,
                },
                {
                    name: 'gender',
                    value: gender,
                    icon: WcIcon,
                },
            ]
        },
        {
            label: 'Origin',
            items: [
                {
                    name: 'name',
                    value: origin?.name,
                    icon: PersonIcon,
                },
                {
                    name: 'type',
                    value: origin?.type,
                    icon: RecentActorsIcon,
                },
                {
                    name: 'dimension',
                    value: origin?.dimension,
                    icon: PublicIcon,
                },
            ],
        },
        {
            label: 'Location',
            items: [
                {
                    name: 'Name',
                    value: location?.name,
                    icon: PersonIcon,
                },
                {
                    name: 'Type',
                    value: location?.type,
                    icon: RecentActorsIcon,
                },
                {
                    name: 'Dimension',
                    value: location?.dimension,
                    icon: PublicIcon,
                },
            ]
        }
    ];

    return (
        <Container>
            <Grid container justifyContent='center'>
                <Grid item xs={12} md={6}>
                    <Box textAlign='center' mb={4}>
                        <Avatar
                            alt={name}
                            src={image}
                            sx={{ width: 250, height: 250, margin: '0 auto 20px auto' }}
                        />
                        <Typography variant='h3'>{name}</Typography>
                    </Box>
                    <Card>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange}>
                                {TABS.map(({ label }, index) => (
                                    <Tab
                                        {...{ label }}
                                        id={`tab-${index}`}
                                    />
                                ))}
                            </Tabs>
                        </Box>
                        {TABS.map(({ items }, index) => (
                            <div
                                role="tabpanel"
                                hidden={value !== index}
                                id={`tabpanel-${index}`}
                                aria-labelledby={`tab-${index}`}
                            >
                                {value === index && (
                                    <Box>
                                        <List {...{ items }} />
                                    </Box>
                                )}
                            </div>
                        ))}
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleCharacter;
