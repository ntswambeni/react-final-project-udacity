import { render } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import { store } from "../index";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  const component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </MemoryRouter>
  );
});
