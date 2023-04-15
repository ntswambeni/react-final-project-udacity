import PollAnswer from "../components/PollAnswer";

const PollPage = () => {
  return (
    <div className="poll-page">
      <h2>Poll by sarahedo</h2>
      <img
        src="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg"
        alt="user avatar"
        className="large-avatar"
      />
      <h3>Would you rather</h3>
      <div className="poll-page-answers">
        <div className="poll-page-answers__answer">
          <PollAnswer />
        </div>
        <div className="poll-page-answers__answer">
          <PollAnswer />
        </div>
      </div>
    </div>
  );
};

export default PollPage;
