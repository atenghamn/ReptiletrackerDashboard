import { Paper, Box, Typography } from "@mui/material";

const Dashboard = () => {
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

export default Dashboard;
