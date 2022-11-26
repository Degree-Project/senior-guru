import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContainerExample from "./components/LogIn";
import SignUpPage from "./components/SignUpPage";
import { AuthContextProvider } from "../src/context/AuthContext";
import Services from "./components/Services";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<ContainerExample />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
