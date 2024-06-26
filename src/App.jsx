import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About"} />
          <Route path="/projects" element={"Projects"} />
          <Route path="/contact" element={"Contacts"} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
