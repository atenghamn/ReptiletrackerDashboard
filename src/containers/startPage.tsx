import { Paper, Box, Typography } from "@mui/material";
import React from "react";

const StartPage = () => {

    return (
        <Paper>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" gutterBottom>
                    ReptileTracker
                </Typography>
            </Box>
        </Paper>
    );
}

export default StartPage;