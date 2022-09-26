import { TODO_ADD, TODO_UPDATE, TODO_DELETE } from "../types";

export default (state, action) => {
  console.log(action.payload, "<=========");
  switch (action.type) {
    case TODO_ADD:
      if (action.payload.title === "" || action.payload.content === "")
        return state;
      return [...state, action.payload];

    case TODO_DELETE:
      return state.filter((note) => note.id !== action.payload.id);

    case TODO_UPDATE:
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content
            }
          : note
      );

    default:
      return state;
  }
};
