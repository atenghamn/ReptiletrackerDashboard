import { Grid } from "@mui/material";
import Login from "../../components/auth/login";
import Text from "../../components/displayText/text";

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
                        <Text text="Reptile Tracker" variant="h1" />
                    </Grid>
                    <Grid item>
                        <Login />
                    </Grid>
        </Grid>
    );
}

export default LoginPage;