import { Typography } from "@mui/material"

const Text = (props: DisplayText) => {

    const { text, variant } = props;
    return (
        <Typography variant={variant}>
            {text}
        </Typography>
    );
};

export default Text;