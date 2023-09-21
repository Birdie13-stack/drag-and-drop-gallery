import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout";
// import "react-loading-skeleton/"
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
