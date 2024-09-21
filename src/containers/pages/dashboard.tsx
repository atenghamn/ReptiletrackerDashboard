import { Paper, Box, Typography } from "@mui/material";
import Logout from "../../components/auth/logout";
import AuthService from "../../services/auth-service"; 

const Dashboard = () => {
    const user = AuthService.getUserId();
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
