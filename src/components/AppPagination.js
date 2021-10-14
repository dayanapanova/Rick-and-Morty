import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        bottom: "0",
        zIndex: "200",
        height: "30px",
        padding: "10px 80px",
        color: "white",
        width: "100%",
        display: "block"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    }
}))

export default function AppPagination({ setPage, page }) {
    const classes = useStyles();
    const handleChange = (page) => {
        setPage(page);
    }
    return (
        <div className={classes.container}>
            <Stack spacing={2}>
                <Pagination
                    onChange={(e) => handleChange(e.target.textContent)}
                    count={3} />
            </Stack>
        </div>
    );
}
