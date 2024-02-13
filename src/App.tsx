import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <Home />
      </Provider>
    </Layout>
  );
}

export default App;
