# React To Do List 備忘錄

此練習是跟著[布魯斯前端練習-備忘錄](https://www.youtube.com/live/zqV7NIFGDrQ?si=09v23jJbYvttefdj)

## 學習重點

- 重複使用的UI介面拆解成 components ，頁面組件化，提升開發效率跟維護性
- 使用`useState`狀態鉤子及`useEffect`鉤子來處理依賴關係的副作用渲染
- 在共通父元件中使用 props 的傳遞，使子元件可以呼叫從父元件傳下來的 props 來更新狀態，達成子元件間的間接溝通
- 使用`useRef`鉤子儲存初始值，這些值的變化並不會觸發元件的重新渲染。因為`useRef`並不會直接控制渲染過程。實際上`useRef`通常是用來儲存在元件的整個生命週期中保持不變的數據，像是獲取DOM。
- 在此練習中是使用`useRef`儲存一個布林值，此值作為條件在`useEffect`中去決定何時允許更新渲染備忘錄的清單數據，這可以幫助防止在不必要的情況下重新渲染頁面，例如：只有在備忘錄清單的內容實際有變更時（新增或刪除），而不是每次元件重新渲染(EX：重新整理)時就更新
- 使用server-json套件工具模擬後端API，使用**Fetch API** 處理資料的更新

## 開始使用備忘錄吧🙌

- 啟動React專案

```sh
   npm start
```

- 啟動 server-json 中的**db.json**資料

```sh
   npm run server
```
