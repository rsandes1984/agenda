import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Sac from "./pages/Sac/sac";
import NotFound from "./pages/NotFound/NotFound";
import Agendamento from "./pages/Agendamento/Agendamento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sac" element={<Sac />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
