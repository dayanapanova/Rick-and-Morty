import { Stack, Pagination, Box } from '@mui/material';

const AppPagination = ({ setPage, totalPages }) => (
    <Box display='flex' justifyContent='center' mt={5}>
        <Stack spacing={2}>
            <Pagination
                onChange={(e) => setPage(e.target.textContent)}
                count={totalPages}
            />
        </Stack>
    </Box>
);

export default AppPagination;
