import PollCard from "./PollCard";

const PollList = () => {
  return (
    <div>
      <h2>New Question</h2>
      <ul className="poll-list">
        <li className="poll-list__item">
          <PollCard />
        </li>
        <li className="poll-list__item">
          <PollCard />
        </li>
        <li className="poll-list__item">
          <PollCard />
        </li>
        <li className="poll-list__item">
          <PollCard />
        </li>
        <li className="poll-list__item">
          <PollCard />
        </li>
      </ul>
    </div>
  );
};

export default PollList;
