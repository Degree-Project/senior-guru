import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContainerExample from "./components/LogIn";
import NavBar from "./components/NavBar";
import SignUpPage from "./components/SignUpPage";
// import all page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ContainerExample />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
