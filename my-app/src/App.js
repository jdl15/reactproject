import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./counter/counter";
import Todo from "./todolist/todo";
import "./App.css";

export default function App() {
    return (
        <Router>
            <div className="project">
                <Link to="/counter"><button>Counter</button></Link>
                <Link to="/todolist"><button>Todo List</button></Link>
            </div>
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/todolist" element={<Todo />} />
            </Routes>
        </Router>
    );
}