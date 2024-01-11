import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import Login from "../components/login";

const StartPage = () => {

    return (
        <Paper>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" gutterBottom>
                    ReptileTracker
                </Typography>
                <Login />
            </Box>
        </Paper>
    );
}

export default StartPage;