import { Column } from "../types";

const handleDragElement = (e: React.DragEvent, column: Column) => {
  e.dataTransfer.setData("columnName", column.name);
  e.dataTransfer.setData("columnFunction", column.function);
};

export { handleDragElement };
