import React, { useReducer } from "react";
import NotesContext from "./notesContext";
import NotesReducer from "./notesReducer";
import { TODO_ADD, TODO_UPDATE, TODO_DELETE } from "../types";

const NotesState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(NotesReducer, initialState);

  // Add note
  const addTodo = (data) => {
    console.log("data", data);
    dispatch({ type: TODO_ADD, payload: data.payload });
  };

  // Edit note

  // Delete note

  return (
    <NotesContext.Provider
      value={{
        state,
        addTodo
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
