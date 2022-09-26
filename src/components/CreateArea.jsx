import React from "react";
import { ACTIONS } from "./App";

function CreateArea({ note, handleChange, dispatch, resetNote }) {
  return (
    <div className="creatArea">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          className="btn btn--block"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: ACTIONS.TODO_ADD,
              payload: {
                id: note.id,
                title: note.title,
                content: note.content,
                createdAt: new Date().getTime()
              }
            });
            resetNote();
          }}
        >
          Add
        </button>
        <div className="creatArea__shine">🚀</div>
      </form>
    </div>
  );
}

export default CreateArea;
