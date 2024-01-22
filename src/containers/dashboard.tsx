import { Paper, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";


const Dashboard = () => {

    const [authenticated, setAuthenticated] = useState('');

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <Paper>
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant="h1" gutterBottom>
                        Dashboard
                    </Typography>
                </Box>
            </Paper>
        );
    }
}

export default Dashboard;