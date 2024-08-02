import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useTheme} from "@mui/material";

const AddBtn = ({obj}) => {
    const {href, title} = obj;
    const theme = useTheme();
    return (
        <Button variant="contained" sx={
            {
                backgroundColor: theme.palette.mode === 'dark' ? "#323232" : "#014655",
                color: "white",
                '&:hover': {
                    backgroundColor: "#ADA479",
                    color: "white"
                }
            }
        }
        href={href}><AddIcon /> {title}</Button>
    );
}

export default AddBtn;