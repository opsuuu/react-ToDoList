import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("請輸入記事內容", { icon: "⚠️" });

const Edit = ({ setData = [], submitingStatus = Boolean }) => {
  const today = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [note, setNote] = useState("");
  const [date, setDate] = useState(today());
  const [time, setTime] = useState("");

  const noteChange = (e) => {
    setNote(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  const id = uuidv4();

  const addListItem = () => {
    if (note === "") {
      notify();
      return;
    }
    // 設置新增時submitingStatus.current為true，允許更新
    submitingStatus.current = true;
    setData((prev) => {
      return [{ note, date, time, id }, ...prev];
    });

    initInput();
  };

  const initInput = () => {
    setNote("");
    setDate("");
    setTime("");
  };

  return (
    <div className="edit-container">
      <h1>備忘錄</h1>
      <div className="edit-input">
        <p>記事</p>
        <input type="text" value={note} onChange={noteChange} />
        <p>日期</p>
        <input type="date" value={date} onChange={dateChange} />
        <p>時間</p>
        <input type="time" value={time} onChange={timeChange} />
        <div className="add-btn" onClick={addListItem}>
          新增
        </div>
      </div>
    </div>
  );
};

export default Edit;
