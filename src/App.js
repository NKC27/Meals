import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/pages/SignUp/SignUp";
import AppContext from "./context";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage/404.js";

function App() {
  return (
    <Router>
      <AppContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<ErrorPage />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
