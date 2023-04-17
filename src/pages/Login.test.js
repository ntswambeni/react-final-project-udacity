import { render } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers";
import middleware from "../middleware";

const store = configureStore({ reducer: rootReducers, middleware: middleware });
describe("Login", () => {
  it("matchs snapshot", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
