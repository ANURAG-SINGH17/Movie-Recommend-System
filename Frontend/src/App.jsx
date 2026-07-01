import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:title" element={<Recommendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;