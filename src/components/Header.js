import React from 'react';
import {
    AppBar, Button, Toolbar, Box, Stack, Typography, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import { Logo, CharacterIcon, EpisodeIcon } from "../icons";

const NAV = [
    {
        label: 'Characters',
        route: '/characters',
        icon: CharacterIcon,
    },
    {
        label: 'Episodes',
        route: '/episodes',
        icon: EpisodeIcon,
    },
]

const Navigation = () => {
    const history = useHistory();
    const theme = useTheme();
    const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <AppBar>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' width='100%'>
                    <Stack
                        spacing={2}
                        direction='row'
                        alignItems='center'
                        onClick={() => history.push('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        <Logo style={{ width: 40, height: 40 }} />
                        {isUpSm && (
                            <Typography variant='h6'>Rick and Morty</Typography>
                        )}
                    </Stack>
                    <Stack spacing={2} direction='row'>
                        {NAV.map(({ label, route, icon: Icon }) => (
                            <Button
                                startIcon={<Icon style={{ width: 20, height: 20 }} />}
                                key={`${label}-${route}`}
                                onClick={() => history.push(route)}
                                color='inherit'
                            >
                                {label}
                            </Button>
                        ))}
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;
