import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound, Projects } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
