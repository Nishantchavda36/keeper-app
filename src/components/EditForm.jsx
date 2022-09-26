import React, { useState } from "react";
import { ACTIONS } from "./App";

function Editform({ note, onCancelClick, onUpdateClick, dispatch }) {
  const [noteData, setNoteData] = useState(note);

  return (
    <div className="editForm">
      <form>
        <input
          name="title"
          onChange={(e) => {
            setNoteData({ ...noteData, title: e.target.value });
          }}
          value={noteData.title}
          placeholder="Title"
        />
        <input
          name="content"
          onChange={(e) => {
            setNoteData({ ...noteData, content: e.target.value });
          }}
          value={noteData.content}
          placeholder="Take a note..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: ACTIONS.TODO_UPDATE,
              payload: {
                id: noteData.id,
                title: noteData.title,
                content: noteData.content
              }
            });
            onUpdateClick();
          }}
          className="btn mr-10"
        >
          Update
        </button>
        <button onClick={onCancelClick} className="btn">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Editform;
