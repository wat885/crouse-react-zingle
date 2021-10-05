import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        // console.log(resJson)
        setUsers(resJson.data);
      });
    return;
  }, []);

  const userElements = users.map((user) => {
    return <h3 key={user.id}>{user.email}</h3>;
  });

  return (
    <section className="app-section">
      <div className="app-container">
        <h1>เก็บโค้ดส่วนลดไม่ทัน</h1>
        {userElements}
      </div>
    </section>
  );
}

export default App;