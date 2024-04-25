import { useState, useEffect, useRef } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import { API_GET_DATA } from "../../global/constants";

const Home = () => {
  const [data, setData] = useState([]);

  // 利用useRef來防止更新操作的執行
  const submitingStatus = useRef(false);

  const getFetchData = async () => {
    const response = await fetch(API_GET_DATA);
    const res = await response.json();
    const { data } = res;
    setData(data);
  };

  const updateFetchData = async (data) => {
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
  };

  useEffect(() => {
    // 如果submitingStatus.current是false，則直接返回，不執行任何操作
    if (!submitingStatus.current) {
      return;
    }
    updateFetchData(data).then((data) => (submitingStatus.current = false));
  }, [data]);

  // 第一次頁面加載時渲染備忘錄清單
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="app">
      <Edit setData={setData} submitingStatus={submitingStatus} />
      <List
        listData={data}
        removeData={setData}
        submitingStatus={submitingStatus}
      />
    </div>
  );
};

export default Home;
