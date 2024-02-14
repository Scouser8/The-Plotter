import { render, screen } from "@testing-library/react";
import SelectedColumns from "../../../components/SelectedColumns";
import { DIMENSIONS, MEASURES } from "../../../constants";

const props = {
  selectedColumns: {
    selectedDimension: DIMENSIONS[0].name,
    selectedMeasures: [MEASURES[0].name, MEASURES[2].name],
  },
  setSelectedColumns: jest.fn(),
};

const renderComponent = () => {
  render(<SelectedColumns {...props} />);
};

it("should render Selected Columns", () => {
  renderComponent();
});

it("should render two clear buttons", () => {
  renderComponent();
  const clearDimensionBtn = screen.getByText(/Clear Dimension/i);
  const clearMeasuresBtn = screen.getByText(/Clear Measures/i);

  expect(clearDimensionBtn).toBeDefined();
  expect(clearMeasuresBtn).toBeDefined();
});
