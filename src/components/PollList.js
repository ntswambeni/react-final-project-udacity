import PollCard from "./PollCard";

const PollList = ({ questionIds, title }) => {
  return (
    <div>
      <h2 className="poll-list-heading">{title}</h2>
      <ul className="poll-list">
        {questionIds.map((questionId) => (
          <li key={questionId} className="poll-list__item">
            <PollCard questionId={questionId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollList;
