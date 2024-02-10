import { Box, Divider } from "@mui/material";

import Dimensions from "./Dimensions";
import Measures from "./Measures";
import columnStyles from "../../styles/columns.styles";

function Columns() {
  return (
    <Box sx={columnStyles.columnsContainerSidebar}>
      <Dimensions />
      <Divider />
      <Measures />
    </Box>
  );
}

export default Columns;
