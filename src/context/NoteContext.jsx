import React, { useReducer, createContext } from "react";
import all_notes from "../data/allNotes";
import noteReducer from "../reducers/noteReducer";
export const noteContext = createContext();

export default function NoteContext({ children }) {
  const initial_state = {
    notes: all_notes,
    copy_notes: all_notes,
    id: null,
    title: "",
    content: "",
    task_completed: false,
    editMode: false,
    filter_notes: "all",
  };

  const [noteState, dispatch] = useReducer(noteReducer, initial_state);

  const context = {
    noteState,
    dispatch,
  };
  return (
    <noteContext.Provider value={context}>{children}</noteContext.Provider>
  );
}
