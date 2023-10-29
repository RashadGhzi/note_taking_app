import React, { useContext } from "react";
import { noteContext } from "../context/NoteContext";
import "./css/showNotes.css";

export default function ShowNotes() {
  const { noteState, dispatch } = useContext(noteContext);
  return (
    <>
      <div className="show-notes-body">
        {noteState.notes && (
          <>
            {noteState.notes.map((note) => (
              <div className="card" key={note.id}>
                {note.task_completed && (
                  <div className="task task-finished">TASK DONE</div>
                )}
                <div className="title"> {note.title} </div>
                <div className="content">{note.content}</div>
                <div className="button-list">
                  <button
                    className="delete-button"
                    onClick={() => {
                      dispatch({ type: "DELETE_NOTE", payload: note.id });
                    }}
                  >
                    DELETE
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => {
                      dispatch({ type: "EDIT_NOTE", payload: note });
                    }}
                  >
                    EDIT
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        {!noteState.notes[0] && (
          <>
            <div className="card">
              <div className="greatest">ALLAH is the GREATEST</div>
            </div>
            <div className="card">
              <div className="empty">
                Add Your Daily Notes. For Make Your Life and time Easy and Always be Happy.
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi molestias accusantium reiciendis in soluta minima,
                cupiditate facilis. Et, ab? Quos repellendus sequi accusamus,
                doloremque numquam similique dolorem soluta ex quaerat.
              </p>
            </div>
            <div className="card">
               <h2>Add Notes +</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
}
