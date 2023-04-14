const Table = () => {
  return (
    <table className="table">
      <tr className="table-header">
        <th className="table-header__item">Users</th>
        <th className="table-header__item">Answered</th>
        <th className="table-header__item">Created</th>
      </tr>
      <tr>
        <td className="table-item">
          <div className="table-item-user">
            <img
              className="table-item-user__avatar"
              src="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg"
            />
            <div className="table-item-user-details">
              <span className="table-item-user-details__name">Sarah Edo</span>
              <span className="table-item-user-details__username">
                sarahedo
              </span>
            </div>
          </div>
        </td>
        <td className="table-item">4</td>
        <td className="table-item">2</td>
      </tr>
      <tr>
        <td className="table-item">
          <div className="table-item-user">
            <img
              className="table-item-user__avatar"
              src="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg"
            />
            <div className="table-item-user-details">
              <span className="table-item-user-details__name">Sarah Edo</span>
              <span className="table-item-user-details__username">
                sarahedo
              </span>
            </div>
          </div>
        </td>
        <td className="table-item">4</td>
        <td className="table-item">2</td>
      </tr>
    </table>
  );
};

export default Table;
