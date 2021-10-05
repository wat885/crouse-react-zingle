import { useEffect, useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  // const [users, setUsers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  let popup = null;
  if (isPopupOpen) {
    popup = <Popup onPopupClose={() => setIsPopupOpen(false)} />;
  }

  // useEffect(() => {
  //   // fetch("https://reqres.in/api/users?page=2")
  //   //   .then((res) => {
  //   //     return res.json();
  //   //   })
  //   //   .then((resJson) => {
  //   //     // console.log(resJson)
  //   //     setUsers(resJson.data);
  //   //   });

  //   console.log('App  now = ');
  //   return () => {
  //     console.log('last ' );
  //   };
  // }, []);

  // const userElements = users.map((user) => {
  //   return <h3 key={user.id}>{user.email}</h3>;
  // });

  return (
    <section className="app-section">
      <div className="app-container">
        <h1>เก็บโค้ดส่วนลดไม่ทัน</h1>
        {/* {userElements} */}
        <button
          onClick={() => {
            setIsPopupOpen(true);
          }}
        >
          {" "}
          เปิดป๊อปอัพ{" "}
        </button>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
        <p>testopup</p>
      </div>

      {popup}
    </section>
  );
}

export default App;
