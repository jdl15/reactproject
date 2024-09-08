import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./counter/counter";
import Todo from "./todolist/todo";
import Calculator from "./basicCalculator/calculator";
import "./App.css";

export default function App() {
    return (
        <Router>
            <div className="project">
                <Link to="/counter"><button>Counter</button></Link>
                <Link to="/todolist"><button>Todo List</button></Link>
                <Link to="/basiccalculator"><button>Basic Calculator</button></Link>
                <a href="https://jdl15.github.io/WebSample/" target="_blank" rel="noopener noreferrer">
                    <button>HTML/CSS/JS Sample</button>
                </a>
            </div>
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/todolist" element={<Todo />} />
                <Route path="/basiccalculator" element={<Calculator />} />
            </Routes>
        </Router>
    );
}