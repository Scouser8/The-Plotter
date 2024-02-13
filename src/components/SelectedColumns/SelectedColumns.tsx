import { Box, Button, Typography } from "@mui/material";
import selectedColumnsStyles from "../../styles/selectedColumns.styles";
import { useState } from "react";
import { DIMENSION_FUNCTION, MEASURE_FUNCTION } from "../../constants";
import { ColumnFunction } from "../../types";

type SelectedColumns = {
  selectedDimension: string;
  selectedMeasures: string[];
};

type EmptyColumnsGroup = "" | [];

function SelectedColumns() {
  const [selectedColumns, setSelectedColumns] = useState<SelectedColumns>({
    selectedDimension: "",
    selectedMeasures: [],
  });
  const { selectedDimension, selectedMeasures } = selectedColumns;

  const handleOnDrop = (e: React.DragEvent, targetedFunction: ColumnFunction) => {
    const columnName = e.dataTransfer.getData("columnName").toLowerCase();
    const columnFunction = e.dataTransfer
      .getData("columnFunction")
      .toLowerCase();
    const canAddDimension =
      targetedFunction === DIMENSION_FUNCTION &&
      columnFunction === DIMENSION_FUNCTION &&
      selectedDimension !== columnName;
    const canAddMeasure =
      targetedFunction === MEASURE_FUNCTION &&
      columnFunction === MEASURE_FUNCTION &&
      !selectedMeasures.includes(columnName);

    if (canAddDimension) {
      setSelectedColumns(() => ({
        ...selectedColumns,
        selectedDimension: columnName,
      }));
    } else if (canAddMeasure) {
      setSelectedColumns(() => ({
        ...selectedColumns,
        selectedMeasures: [...selectedMeasures, columnName],
      }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const hanldeClearColumnsGroup = (
    columnFunctionality: string,
    emptyValue: EmptyColumnsGroup
  ) => {
    setSelectedColumns((prevState) => ({
      ...prevState,
      [columnFunctionality]: emptyValue,
    }));
  };
  return (
    <Box sx={selectedColumnsStyles.root}>
      <Box
        sx={selectedColumnsStyles.container}
        onDrop={(e) => handleOnDrop(e, DIMENSION_FUNCTION)}
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
        <Button
          variant="outlined"
          onClick={() => hanldeClearColumnsGroup("selectedDimension", "")}
        >
          Clear
        </Button>
      </Box>
      <Box
        sx={selectedColumnsStyles.container}
        onDrop={(e) => handleOnDrop(e, MEASURE_FUNCTION)}
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
        <Button
          variant="outlined"
          onClick={() => hanldeClearColumnsGroup("selectedMeasures", [])}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
}

export default SelectedColumns;
