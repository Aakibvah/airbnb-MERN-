import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/indexPage";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
    </Routes>
  );
}

export default App;
