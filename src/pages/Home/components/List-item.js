const ListItem = ({
  id = "",
  note = "",
  date = "",
  time = "",
  removeData = [],
  submitingStatus = Boolean,
}) => {
  const removeItem = () => {
    // 設置刪除時submitingStatus.current為true，允許更新
    submitingStatus.current = true;
    removeData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="list-item">
      <div>
        <p>{note}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <div className="delete-btn" onClick={removeItem}>
        刪除
      </div>
    </div>
  );
};

export default ListItem;
