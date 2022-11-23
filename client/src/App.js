import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContainerExample from "./components/LogIn";
import SignUpPage from "./components/SignUpPage";
import { AuthContextProvider } from "../src/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<ContainerExample />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
