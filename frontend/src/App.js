import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotesList from "./components/NotesList";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

// import PageNotFound from "./commponents/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/notes" Component={NotesList} />
        <Route exact path="/signup" Component={Register} />
        <Route exact path="/" Component={Login} />
        {/* <Route path="*" Component={PageNotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;
