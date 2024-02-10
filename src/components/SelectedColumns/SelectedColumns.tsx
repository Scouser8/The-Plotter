import { Box, Button, Typography } from "@mui/material";
import selectedColumnsStyles from "../../styles/selectedColumns.styles";
import { useState } from "react";
import { DIMENSIONS, MEASURES } from "../../constants";

type SelectedColumns = {
  selectedDimension: string;
  selectedMeasures: string[];
};

function SelectedColumns() {
  const [selectedColumns, setSelectedColumns] = useState<SelectedColumns>({
    selectedDimension: "",
    selectedMeasures: [],
  });
  const { selectedDimension, selectedMeasures } = selectedColumns;
  
  const handleOnDrop = (e: React.DragEvent) => {
    const column = e.dataTransfer.getData("column").toLowerCase();
    if (
      DIMENSIONS.includes(column) &&
      !selectedDimension &&
      selectedDimension !== column
    ) {
      console.log("Set Dimension");

      setSelectedColumns(() => ({
        ...selectedColumns,
        selectedDimension: column,
      }));
    } else if (
      MEASURES.includes(column) &&
      !selectedMeasures.includes(column)
    ) {
      setSelectedColumns(() => ({
        ...selectedColumns,
        selectedMeasures: [...selectedMeasures, column],
      }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <Box sx={selectedColumnsStyles.root}>
      <Box
        sx={selectedColumnsStyles.container}
        component="div"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        <Typography className="functionLabel">Dimension</Typography>
        <Box className="selectedColumns">
          {selectedDimension && (
            <Typography className="selectedColumn">
              {selectedDimension}
            </Typography>
          )}
        </Box>
        <Button variant="outlined">Clear</Button>
      </Box>
      <Box
        sx={selectedColumnsStyles.container}
        component="div"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        <Typography className="functionLabel">Measures</Typography>
        <Box className="selectedColumns">
          {selectedMeasures.map((measure) => (
            <Typography key={measure} className="selectedColumn">
              {measure}
            </Typography>
          ))}
        </Box>
        <Button variant="outlined">Clear</Button>
      </Box>
    </Box>
  );
}

export default SelectedColumns;
