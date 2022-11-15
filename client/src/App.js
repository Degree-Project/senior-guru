import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// import all page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
