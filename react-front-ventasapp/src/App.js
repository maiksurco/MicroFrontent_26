import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
import CategoriaProds from './pages/CategoriaProds';
import Home from './pages/Home';
import Login from "./pages/auth/Loogin";
import Cproductos from './pages/Producto_crud';
import ServicioProds from './pages/Servicios/ServiciosProds';
import SocioProds from './pages/Socio/SocioProds';
import WorkerProds from './pages/Workers/WorkersProds';
import VentaProds from './pages/ventas/VentasProds';


function App() {
  return (
 <Router>
  <div className=''>
     <Routes>
      {/* login */}
      <Route path="/" element={<Login />} />
      {/* end login */}
     <Route path="/dashboard" element={<Home/>} />
     <Route path="/categoria" element={<CategoriaProds />} />
     <Route path="/producto" element={<Cproductos />} />
     <Route path="/servicio" element={<ServicioProds />} />
     <Route path="/socio" element={<SocioProds />} />
     <Route path="/worker" element={<WorkerProds />} />
     <Route path="/ventas" element={<VentaProds />} />

     </Routes>
  </div>
   </Router>
  );
}

export default App;
