import { render, screen } from "@testing-library/react";
import Header from "../../../components/Layout/Header";

it("Should render Header with the App name", () => {
  render(<Header />);
  const appName = screen.getByText(/The Plotter/i);
  expect(appName).toBeDefined();
});
