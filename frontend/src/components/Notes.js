import {FaTrash } from "react-icons/fa";
import axios from "axios";

const Notes = (props) =>{
    const deleteNote = (id) =>{
        // console.log(e);
        axios
        .delete("http://localhost:9000/todo/info/" + id)
        .then((res) => {
          // console.log(res.data);
          props.toggleRefersh();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
return(
    props.data.map((i)=> (<div className="notesArea">
    <p style={{fontSize:"26px"}}>{i.task}</p>
    <p style={{marginTop:"10px",fontSize:"12px"}}>{i.date}</p>
    <p style={{textAlign:"end"}}><FaTrash onClick={(e) => deleteNote(i._id)} /></p>
    </div>))
)
}

export default Notes;