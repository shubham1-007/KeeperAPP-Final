import React, { useState } from "react";
import AddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    var input=(event.target.value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });

    fetch('https://keeperfinal007.vercel.app/api' , {
      method : 'POST',
  
      body : JSON.stringify(name),
  
      headers : {
          'Content-type' : 'application/json'
      }
  });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expansion() {
    setExpanded((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : 1}
          onClick={expansion}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
