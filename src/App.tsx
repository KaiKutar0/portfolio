import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
