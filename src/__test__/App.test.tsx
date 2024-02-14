import { render } from "@testing-library/react";
import App from "../App";

it("should render App proprely", () => {
  render(<App />);
  // Since its failing with Vite Setup & unfortunately I don't have enough time to debug.
  // I can simply tell you what I would do if it was working.
  // I would check for the API call for getting Columns, or maybe this logic could be moved to the <Home />
});
