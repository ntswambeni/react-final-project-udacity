import { render } from "@testing-library/react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import middleware from "../middleware";
import reducers from "../reducers";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: reducers, middleware: middleware });
test("Nav displays all nav links", () => {
  const component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Nav />
      </Provider>
    </MemoryRouter>
  );
  const homeLink = component.getByText("Home");
  const leaderboardLink = component.getByText("Leaderboard");
  const New = component.getByText("New");

  expect(homeLink).toBeInTheDocument();
  expect(leaderboardLink).toBeInTheDocument();
  expect(New).toBeInTheDocument();
});
