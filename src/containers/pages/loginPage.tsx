import { Typography, Grid } from "@mui/material";
import React from "react";
import Login from "../../components/auth/login";

const LoginPage = () => {

    return (
        <Grid container
                justifyContent="center"
                spacing={3}
                direction="column"
                alignItems="stretch"
                >
                    <Grid item
                    xs={6} lg
                     marginTop={5}>
                        <Typography variant="h2" gutterBottom>
                            REPTILE TRACKER
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Login />
                    </Grid>
        </Grid>
    );
}

export default LoginPage;