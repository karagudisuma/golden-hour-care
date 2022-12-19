import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import "./App.css";
import List from "./pages/List.js";
import HospitalAdmin from "./pages/HospitalAdmin.js";
import Error from "./pages/Error.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/results" element={<List />}></Route>
        <Route path="hospital-admin" element={<HospitalAdmin />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
