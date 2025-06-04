import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/workers" element={<Workers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
