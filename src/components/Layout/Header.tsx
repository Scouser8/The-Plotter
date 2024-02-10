import { Box, Typography } from "@mui/material";
import headerStyles from "../../styles/header.styles";

function Header() {
  return (
    <Box sx={headerStyles}>
      <Typography variant="h5">Plotter App</Typography>
    </Box>
  );
}

export default Header;
