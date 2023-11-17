import { Box } from "@mui/material";
import { styled } from "@mui/system";


const DashboardBox = styled(Box) (({theme}) =>({
   backgroundColor: theme.palette.background.light,
   borderRadius: "1rem",
   boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
}));


export default DashboardBox;