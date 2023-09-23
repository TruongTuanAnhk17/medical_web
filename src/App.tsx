import { Route, Routes } from "react-router-dom";
import ChiTietBenh from "./pages/ChiTiet";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chitiet" element={<ChiTietBenh />} />
    </Routes>
  );
}

export default App;
