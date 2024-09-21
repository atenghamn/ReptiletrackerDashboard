import { Typography } from "@mui/material"
import { DisplayText } from "./displayText";

const Text = (props: DisplayText) => {

    const { text, variant } = props;
    return (
        <Typography variant={variant}>
            {text}
        </Typography>
    );
};

export default Text;