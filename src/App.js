import "./App.css";
import Home from "./Components/Home";
import Add from "./Components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
