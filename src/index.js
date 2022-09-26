import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

// UPDATED:
/**
 * 1. Styles
 * 2. Used BEM class naming convention
 * 3. Added notes to local storage
 * 4. Replaced useState with useReducer hook
 * 5. Sorted notes in ascending order by latest created note
 * 6. Added some animations * :)
 */

//  Continuing
/**
 * Implementing context API
 */
