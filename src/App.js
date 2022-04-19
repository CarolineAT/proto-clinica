
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { IndexView } from "./components/Componentes/appBar/indexView";
import Componentes from "./components/Componentes/componentes";
import CustomStepper from "./components/Componentes/stepper/stepper";
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
      <Routes>
        <Route path='/appbar-example' element={<IndexView />} />
      </Routes>
      <Routes>
        <Route path='/stepper' element={<CustomStepper />} />
      </Routes>
    </Router>
  );
}

export default App;
