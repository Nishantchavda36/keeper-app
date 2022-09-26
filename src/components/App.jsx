import React, { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Editform from "./EditForm";

export const ACTIONS = {
  TODO_ADD: "TODO_ADD",
  TODO_DELETE: "TODO_DELETE",
  TODO_UPDATE: "TODO_UPDATE"
};

function reducer(notes, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADD:
      if (action.payload.title === "" || action.payload.content === "")
        return notes;
      return [...notes, action.payload];

    case ACTIONS.TODO_DELETE:
      return notes.filter((note) => note.id !== action.payload.id);

    case ACTIONS.TODO_UPDATE:
      return notes.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content
            }
          : note
      );

    default:
      return notes;
  }
}

function App() {
  const [notes, dispatch] = useReducer(reducer, [
    localStorage.getItem("keeper_notes")
      ? JSON.parse(localStorage.getItem("keeper_notes"))
      : []
  ]);
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState("");

  useEffect(() => {
    localStorage.setItem("keeper_notes", JSON.stringify(notes));
  }, [notes]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preNote) => {
      return {
        ...preNote,
        id: new Date().getTime() * Math.floor(Math.random() * 99),
        [name]: value
      };
    });
  }

  function resetNote() {
    setNote({
      id: "",
      title: "",
      content: ""
    });
  }

  function handleIsEditing(id) {
    setIsBeingEdited(id);
    setIsEditing(true);
  }

  // Sort notes in ascending order by latest created note
  const sortedNotes = notes.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div>
      <Header />

      <CreateArea
        note={note}
        handleChange={handleChange}
        dispatch={dispatch}
        resetNote={resetNote}
      />

      <div className="notes">
        {sortedNotes.map((note) =>
          isEditing && isBeingEdited === note.id ? (
            <Editform
              key={note.id}
              note={note}
              dispatch={dispatch}
              onCancelClick={() => setIsEditing(false)}
              onUpdateClick={() => setIsEditing(false)}
            />
          ) : (
            <Note
              key={note.id}
              note={note}
              dispatch={dispatch}
              onEditClick={() => handleIsEditing(note.id)}
            />
          )
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
