import { Provider } from "react-redux";
import store from "../../../store";
import Home from "../../../components/Home";
import { render } from "@testing-library/react";

it("should render Home", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
