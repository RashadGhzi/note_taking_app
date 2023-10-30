import ShowNotes from "./components/ShowNotes";
import NoteContext from "./context/NoteContext";
import AddNote from "./components/AddNote";
import "./App.css";


function App() {
  return (
    <>
      <div className="notes-related">
        <NoteContext>
          <ShowNotes />
          <AddNote />
        </NoteContext>
      </div>
    </>
  );
}

export default App;
