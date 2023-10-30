export default function noteReducer(state, action) {
  switch (action.type) {
    case "DELETE_NOTE":
      const notes = state.notes.filter((note) => note.id !== action.payload);
      return { ...state, notes: notes };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.note],
        title: "",
        content: "",
      };
    case "EDIT_NOTE":
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        editMode: true,
        task_completed: action.payload.task_completed,
      };
    case "TITLE_ONCHANGE":
      return { ...state, title: action.payload };
    case "CONTENT_ONCHANGE":
      return { ...state, content: action.payload };

    case "UPDATE_NOTE":
      const notes_list = state.notes.map((note) => {
        if (note.id === state.id) {
          return {
            id: state.id,
            title: action.payload.title,
            content: action.payload.content,
            task_completed: state.task_completed,
          };
        }
        return note;
      });
      return {
        ...state,
        id: null,
        notes: notes_list,
        title: "",
        content: "",
        editMode: false,
        task_completed: false,
      };

    case "TASK_COMPLETE_ONCHANGE":
      return { ...state, task_completed: action.payload };
    case "FILTER_NOTE":
      return { ...state, filter_notes: action.payload };
    default:
      return state;
  }
}
