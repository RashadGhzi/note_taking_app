import React, { useContext, useState } from "react";
import { noteContext } from "../context/NoteContext";
import "./css/showNotes.css";

export default function ShowNotes() {
  const { noteState, dispatch } = useContext(noteContext);
  const [search, setSearch] = useState("");

  const filter_list = noteState.notes.filter((note) => {
    const title = note.title.toLowerCase();
    const search_title = search.toLowerCase();
    if (noteState.filter_notes === "finished") {
      return note.task_completed && title.includes(search_title);
    } else if (noteState.filter_notes === "un_finished") {
      return !note.task_completed && title.includes(search_title);
    } else {
      return note && title.includes(search_title);
    }
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="show-notes-body">
        <div className="card">
          <input
            onChange={handleChange}
            type="search"
            name="note-title-search"
            placeholder="search your notes by title"
            className="search-input"
          />
        </div>
        {filter_list.map((note) => (
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

        {!filter_list[0] && (
          <>
            <div className="card">
              <div className="greatest">ALLAH is the GREATEST</div>
            </div>
            <div className="card">
              <div className="empty">
                Keep Your Daily Notes. For Make Your Life and time Easy.
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
