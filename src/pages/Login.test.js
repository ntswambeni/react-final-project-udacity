import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers";
import middleware from "../middleware";
import Login from "./Login";

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

  it("displays username and password fields and a button", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    const username = component.getByTestId("username");
    const password = component.getByTestId("password");
    const submit = component.getByTestId("submit");

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("clears the form after submit", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    const username = component.getByTestId("username");
    const password = component.getByTestId("password");
    const submit = component.getByTestId("submit");
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    fireEvent.change(username, { target: { value: "sarahado" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(submit);
    expect(username.value).toEqual("");
    expect(password.value).toEqual("");
  });
});
