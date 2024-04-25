import ListItem from "./List-item";

const List = ({
  listData = [],
  removeData = [],
  submitingStatus = Boolean,
}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note = "", date = "", time = "", id = "" } = item;
        return (
          <ListItem
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            removeData={removeData}
            submitingStatus={submitingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
