import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("save question", () => {
  it("returns the saved question and populates all expected fields when corrected data is passed into the function", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "sarahedo",
    };

    const savedQuestion = await _saveQuestion(question);
    expect(savedQuestion.optionOne.text).toEqual(question.optionOneText);
    expect(savedQuestion.optionTwo.text).toEqual(question.optionTwoText);
    expect(savedQuestion.author).toEqual(question.author);

    expect(savedQuestion.hasOwnProperty("id")).toEqual(true);
    expect(savedQuestion.hasOwnProperty("timestamp")).toEqual(true);
    expect(savedQuestion.hasOwnProperty("author")).toEqual(true);
    expect(savedQuestion.hasOwnProperty("optionOne")).toEqual(true);
    expect(savedQuestion.optionOne.hasOwnProperty("votes")).toEqual(true);
    expect(savedQuestion.optionOne.hasOwnProperty("text")).toEqual(true);
    expect(savedQuestion.hasOwnProperty("optionTwo")).toEqual(true);
    expect(savedQuestion.optionTwo.hasOwnProperty("votes")).toEqual(true);
    expect(savedQuestion.optionTwo.hasOwnProperty("text")).toEqual(true);
  });

  it("returns an error if incorrect data is passed to the function", async () => {
    const question = {
      optionOneText: "Option One",
      author: "sarahedo",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("save question answer", () => {
  it("returns the saved question answer", async () => {
    const user = {
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionTwo",
    };
    const returnedAnswer = await _saveQuestionAnswer(user);
    expect(returnedAnswer).toEqual(true);
  });

  it("returns an error if incorrect data is passed to the function", async () => {
    const user = { authedUser: "", qid: "" };
    await expect(_saveQuestionAnswer(user)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
