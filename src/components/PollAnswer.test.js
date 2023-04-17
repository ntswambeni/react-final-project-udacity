import { configureStore } from "@reduxjs/toolkit";
import middleware from "../middleware";
import reducers from "../reducers";
import PollAnswer from "./PollAnswer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const store = configureStore({ reducer: reducers, middleware: middleware });
describe("PollAnswer", () => {
  it("shows the percentage of people who voted for an option", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <PollAnswer
            question={{ text: "option one", votes: ["sarahedo"] }}
            answer="optionOne"
            qid={"8xf0y6ziyjabvozdd253nd"}
            voted={true}
            totalVotes={2}
            votesAmount={1}
          />
        </Provider>
      </MemoryRouter>
    );

    const votePercentage = component.getByText("1 / (50%) voted this");

    expect(votePercentage).toBeInTheDocument();
  });
});
