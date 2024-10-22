import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./counter/counter";
import Todo from "./todolist/todo";
import Calculator from "./basicCalculator/calculator";
import Time from "./time/time";
import "./App.css";

export default function App() {
    return (
        <Router>
            <div className="project">
                <Link to="/counter"><button>Counter</button></Link>
                <Link to="/todolist"><button>Todo List</button></Link>
                <Link to="/basiccalculator"><button>Basic Calculator</button></Link>
                <Link to="/time"><button>Time</button></Link>
            </div>
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/todolist" element={<Todo />} />
                <Route path="/basiccalculator" element={<Calculator />} />
                <Route path="/time" element={<Time />} />
            </Routes>
        </Router>
    );
}