const selectedColumnsStyles = {
  root: { px: 5, py: 5, width: "100%" },
  container: {
    display: "flex",
    gap: 3,
    alignItems: "center",
    marginBottom: 2,
    ".functionLabel": { width: 80 },
    ".selectedColumns": {
      border: "1px solid",
      px: 3,
      py: 0.5,
      borderRadius: 1,
      flex: 1,
    },
  },
};

export default selectedColumnsStyles;
