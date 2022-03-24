import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Favourite } from "./Components/Favourite";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
