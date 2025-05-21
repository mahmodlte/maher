import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Workers from "./pages/Workers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workers" element={<Workers />} />
      </Routes>
    </>
  );
}

export default App;
