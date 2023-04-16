const Leaderboard = ({ users }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table-header">
          <th className="table-header__item">Users</th>
          <th className="table-header__item">Answered</th>
          <th className="table-header__item">Created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="table-item">
              <div className="table-item-user">
                <img
                  className="table-item-user__avatar"
                  src={user.avatarURL}
                  alt={`${user.id}'s avatar `}
                />
                <div className="table-item-user-details">
                  <span className="table-item-user-details__name">
                    {user.name}
                  </span>
                  <span className="table-item-user-details__username">
                    {user.id}
                  </span>
                </div>
              </div>
            </td>
            <td className="table-item">{Object.keys(user.answers).length}</td>
            <td className="table-item">{user.questions.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
