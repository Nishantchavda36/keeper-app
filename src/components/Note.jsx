import React from "react";
import { ACTIONS } from "./App";

function Note({ note, dispatch, onEditClick }) {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <div className="note__underline"></div>
      <p>{note.content}</p>
      <button
        className="btn btn--outline mr-10"
        onClick={() =>
          dispatch({ type: ACTIONS.TODO_DELETE, payload: { id: note.id } })
        }
      >
        Delete
      </button>
      <button className="btn" onClick={onEditClick}>
        Edit
      </button>
    </div>
  );
}

export default Note;
