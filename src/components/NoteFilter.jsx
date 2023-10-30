import React, { useContext } from "react";
import { noteContext } from "../context/NoteContext";

export default function NoteFilter() {
  const { dispatch } = useContext(noteContext);
  const handleChange = (e) => {
    dispatch({ type: "FILTER_NOTE", payload: e.target.value });
  };
  return (
    <>
      <div className="card card-filter">
        <div className="filter-title">
          Filter Your Notes. Between Finished or UnFinished Task.
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="note-filter">
            Filter Note List:
          </label>
          <select
            onChange={handleChange}
            className="select-note-filter"
            name="note-filter"
            id="note-filter"
          >
            <option value="all">All Notes</option>
            <option value="finished">Finished Task</option>
            <option value="un_finished">Unfinished Task</option>
          </select>
        </div>
      </div>
    </>
  );
}
