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
import N8nChat from "./componentes/N8nChat";

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

          <Route path="*" element={<h1>404 - No encontrado</h1>} />
        </Routes>
      </main>
      <N8nChat></N8nChat>
      <Footer></Footer>
    </>
  );
}

export default App;
