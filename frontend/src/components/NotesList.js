import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Notes from "./Notes";
import { FaAlignLeft, FaDoorOpen } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
const NotesList = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [getAll, setGetAll] = useState([]);
  const [refers, toggleRefersh] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/todo/info", { task: note })
      .then((res) => {
        // console.log(res);
        toggleRefersh(!refers);
        setNote("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAll = () => {
    axios
      .get("http://localhost:9000/todo/info")
      .then((res) => {
        console.log(res.data);
        setGetAll(Object.values(res.data).flat());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAll();
  }, [refers]);
  const logout = () => {
    navigate("/");

  };
  return (
    <Fragment>
      <div className="navbar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>
            <FaAlignLeft /> Notes
          </h1>
          <span onClick={logout}>
            <FaDoorOpen style={{ fontSize: "50px" }} />
          </span>
        </div>
      </div>
      <div className="mainDiv">
        <form onSubmit={(e) => addNote(e)}>
          <input
            className="todoInput"
            value={note}
            type="text"
            placeholder="Take a note...."
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></input>
        </form>
      </div>
      <div className="showNotes">
        <Notes data={getAll} toggleRefersh={() => toggleRefersh(!refers)} />
      </div>
    </Fragment>
  );
};

export default NotesList;
