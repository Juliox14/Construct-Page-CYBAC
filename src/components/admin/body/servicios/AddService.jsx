import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useTheme} from "@mui/material";

const AddServiceBtn = () => {
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
        }><AddIcon /> Agregar servicio</Button>
    );
}

export default AddServiceBtn;