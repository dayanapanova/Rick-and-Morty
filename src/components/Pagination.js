import React from 'react';
import { Stack, Pagination as MuiPagination, Box } from '@mui/material';

const Pagination = ({ setPage, totalPages }) => (
    <Box display='flex' justifyContent='center' mt={5} mb={3}>
        <Stack spacing={2}>
            <MuiPagination
                onChange={(e) => setPage(e.target.textContent)}
                count={totalPages}
            />
        </Stack>
    </Box>
);

export default Pagination;
