import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  var [intial, setIntial] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function changeVisi() {
    setIntial(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
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

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: intial ? "" : "none" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={changeVisi}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={intial ? 3 : 1}
        />
        <Zoom in={intial}>
          <Fab style={{ display: intial ? "" : "none" }} onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
