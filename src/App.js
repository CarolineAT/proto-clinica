
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Componentes from "./components/Componentes/componentes";
import Inicio from "./components/inicio";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>} />
      </Routes>
      <Routes>
        <Route path='/proto-clinica' element={<Componentes/>} />
      </Routes>
    </Router>
  );
}

export default App;