import { useState } from "react";
import "./App.css";

const startNote = {
  content: "",
  author: "",
};

function App() {
  //States
  const [note, setNote] = useState(startNote);

  const [allNotes, setAllNotes] = useState([
    {
      id: "1",
      content: "Lorem Ipsum is simply dummy text of the printing ",
      author: "test01",
    },
    {
      id: "2",
      content: "Lorem Ipsum is simply dummy text of the printing ",
      author: "test02",
    },
  ]);

  // fuctions
  function onNoteValueChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function onNoteSubmit(event) {
    event.preventDefault(); // ป้องกันการ refrsh
    console.log(note);
    setAllNotes((prevAllNotes) => {
      const newNote = { ...note };
      newNote.id = Date.now().toString();
      return [newNote, ...prevAllNotes];
    });

    setNote(startNote);
  }

  function onNoteDelete(noteId) {
    setAllNotes((prevAllNotes) => {
      return prevAllNotes.filter((theNote) => theNote.id !== noteId);
    });
  }

  // elements

  const noteElement = allNotes.map((theNote) => {
    return (
      <div key={theNote.id} className="app-note">
        <p>{theNote.content}</p>
        <h5>{theNote.author}</h5>
        <p>
          <a href="#">Edit</a>
          <span> | </span>
          <a
            href="#"
            onClick={() => {
              onNoteDelete(theNote.id);
            }}
          >
            Delete
          </a>
        </p>
      </div>
    );
  });

  return (
    <section className="app-section">
      <div className="app-container">
        <h3>สักหน่อยมั้ยหละ</h3>
        <form onSubmit={onNoteSubmit}>
          <p>
            <textarea
              rows="3"
              placeholder="บันทึกความในใจ"
              name="content"
              value={note.content}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="ลงชื่อ"
              name="author"
              value={note.author}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <button type="submit">เพิ่มไปเลยสิค่ะที่รัก</button>
          </p>
        </form>
        <div className="app-notes">{noteElement}</div>
      </div>
    </section>
  );
}

export default App;
