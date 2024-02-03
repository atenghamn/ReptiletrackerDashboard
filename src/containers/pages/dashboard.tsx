import { Paper, Box, Typography } from "@mui/material";
import Logout from "../../components/auth/logout";

const Dashboard = () => {
        return (
            <Paper>
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant="h1" gutterBottom>
                        Dashboard
                    </Typography>
                    <Logout />
                </Box>
            </Paper>
        );
    }

export default Dashboard;
