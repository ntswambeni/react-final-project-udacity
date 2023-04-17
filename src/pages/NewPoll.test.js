import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react";

import reducers from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { _saveQuestionAnswer } from "../utils/_DATA";
import NewPoll from "./NewPoll";

const store = configureStore({ reducer: reducers, middleware });
describe("NewPoll", () => {
  it("enables submit button if fields are filled", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const saveButton = component.getByTestId("save-button");
    const firstOption = component.getByTestId("firstOption");
    const secondOption = component.getByTestId("secondOption");
    fireEvent.change(firstOption, { target: { value: "opt one" } });
    fireEvent.change(secondOption, { target: { value: "opt two" } });
    expect(saveButton.disabled).toEqual(false);
  });
});
