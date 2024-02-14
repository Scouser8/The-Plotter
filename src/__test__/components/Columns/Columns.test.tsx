import { render } from "@testing-library/react";
import Columns from "../../../components/Columns";
import { Provider } from "react-redux";
import store from "../../../store";

it("should render columns", () => {
  render(
    <Provider store={store}>
      <Columns />
    </Provider>
  );
  // Since here it needs some cofiguration, I should be checking for the Columns to be rendered correctly
});
