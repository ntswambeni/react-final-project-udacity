const PollCard = () => {
  return (
    <div className="poll">
      <div className="poll-details">
        <h3 className="poll-details__owner">mtsamis</h3>
        <span className="poll-details_date">4:11 PM | 11/23/2023</span>
      </div>
      <button type="button" className="poll__button">
        Show
      </button>
    </div>
  );
};

export default PollCard;
