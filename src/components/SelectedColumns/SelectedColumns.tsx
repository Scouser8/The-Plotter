import { Box, Button, Chip, Typography } from "@mui/material";
import selectedColumnsStyles from "../../styles/selectedColumns.styles";

function SelectedColumns() {
  return (
    <Box sx={selectedColumnsStyles.root}>
      <Box sx={selectedColumnsStyles.container}>
        <Typography className="functionLabel">Dimension</Typography>
        <Box className="selectedColumns">
          <Chip label="Product" size="small" />
        </Box>
        <Button variant="outlined">Clear</Button>
      </Box>
      <Box sx={selectedColumnsStyles.container}>
        <Typography className="functionLabel">Measures</Typography>
        <Box className="selectedColumns">
          <Chip label="Cost" size="small" />
        </Box>
        <Button variant="outlined">Clear</Button>
      </Box>
    </Box>
  );
}

export default SelectedColumns;
