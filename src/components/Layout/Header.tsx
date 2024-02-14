import { Box, Typography } from "@mui/material";
import headerStyles from "../../styles/header.styles";
import { AutoGraph } from "@mui/icons-material";

function Header() {
  return (
    <Box sx={headerStyles}>
      <AutoGraph />
      <Typography variant="h5">The Plotter</Typography>
    </Box>
  );
}

export default Header;
