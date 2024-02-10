const selectedColumnsStyles = {
  root: { px: 5, py: 3, paddingBottom: 0, width: "100%" },
  container: {
    display: "flex",
    gap: 3,
    alignItems: "center",
    marginBottom: 2,
    ".functionLabel": { width: 80 },
    ".selectedColumns": {
      display: "flex",
      gap: 2,
      border: "1px solid",
      px: 3,
      py: 0.5,
      borderRadius: 1,
      flex: 1,
      minHeight: 35,
    },
    ".selectedColumn": { border: "1px solid", px: 2 },
  },
};

export default selectedColumnsStyles;
