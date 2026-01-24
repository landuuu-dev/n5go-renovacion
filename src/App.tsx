// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Header } from "./componentes/Header";
import { Home } from "./pages/Home";
import SoporteMantenimiento from "./pages/servicios/SoporteMantenimiento";
import { DataCenter } from "./pages/servicios/DataCenter";
import { Vps } from "./pages/servicios/Vps";
import { DesarrolloSoftware } from "./pages/servicios/DesarrolloSoftware";
import { CorreosEmpresariales } from "./pages/servicios/CorreosEmpresariales";
import { Contactanos } from "./pages/Contactanos";
import { Footer } from "./componentes/Footer";
import { AgenteIa } from "./pages/servicios/AgenteIa";
import { Servidores } from "./pages/servicios/Servidores";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/servicios/SoporteMantenimiento"
            element={<SoporteMantenimiento />}
          />
          <Route path="/servicios/DataCenter" element={<DataCenter />} />
          <Route path="/servicios/Vps" element={<Vps />} />
          <Route
            path="/servicios/DesarrolloSoftware"
            element={<DesarrolloSoftware />}
          />
          <Route
            path="/servicios/CorreosEmpresariales"
            element={<CorreosEmpresariales />}
          />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/servicios/AgenteIa" element={<AgenteIa />}></Route>
          <Route path="/servicios/Servidores" element={<Servidores />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
