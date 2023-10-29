import React, { useContext } from "react";
import "./css/addNote.css";
import { noteContext } from "../context/NoteContext";

export default function AddNote() {
  const { noteState, dispatch } = useContext(noteContext);
  const handleSubmit = (e) => {
    const form = document.getElementById("add-note-form-reset");
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title");
    const content = data.get("content");
    const id = noteState.notes.length + 1;
    const note = {
      id: id,
      title: title,
      content: content,
      task_completed: false,
    };

    //* passed data on dispatch and notes added in noteReducer function.
    if (noteState.editMode) {
      note.task_completed = data.get("task_completed");
      dispatch({ type: "UPDATE_NOTE", payload: note });
    }
    if (!noteState.editMode) {
      dispatch({ type: "ADD_NOTE", note: note });
    }
    form.reset();
  };

  return (
    <>
      <div className="add-note-body">
        <form
          id="add-note-form-reset"
          action=""
          method="post"
          className="add-note-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Note Title"
            value={noteState.title}
            onChange={(e) => {
              dispatch({ type: "TITLE_ONCHANGE", payload: e.target.value });
            }}
            required
          />
          <textarea
            type="text"
            name="content"
            id="content"
            placeholder="Enter Content Here"
            value={noteState.content}
            onChange={(e) => {
              dispatch({ type: "CONTENT_ONCHANGE", payload: e.target.value });
            }}
            required
          />
          {noteState.editMode && (
            <div className="check">
              <input
                name="task_completed"
                className="check-task"
                type="checkbox"
                checked={noteState.task_completed}
                onChange={(e) => {
                  console.log("task", noteState.task_completed);
                  dispatch({
                    type: "TASK_COMPLETE_ONCHANGE",
                    payload: e.target.checked,
                  });
                }}
              />
              <div className="check-info">Check, If It's Done</div>
            </div>
          )}
          {!noteState.editMode ? (
            <button className="add-note-button" type="submit">
              ADD NOTE
            </button>
          ) : (
            <button className="add-note-button" type="submit">
              UPDATE NOTE
            </button>
          )}
        </form>
      </div>
    </>
  );
}
