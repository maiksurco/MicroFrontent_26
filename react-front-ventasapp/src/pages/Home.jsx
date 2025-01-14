import React, { useState } from 'react';

import Footer from '../component/admin/Footer';
import AppLayout from '../component/admin/AppLayout';


const Home = () => {
  return (
    <AppLayout>
 
      <div class="w-full px-6 py-6 mx-auto">
 
    <div className="wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Aquí puedes agregar contenido para el sidebar */}
      </div>

      {/* Contenido principal */}
      <div className="main-panel">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
          {/* Aquí puedes agregar contenido para la barra de navegación */}
        </nav>

        {/* Contenido del cuerpo */}
        <div className="content">
          {/* Aquí puedes agregar el contenido principal de tu dashboard */}
          <h1>Mi Dashboard</h1>
        </div>

        {/* Footer */}
        <footer className="footer">
          {/* Aquí puedes agregar contenido para el pie de página */}
        </footer>
      </div>
    </div>


      </div>

    </AppLayout>

  );
}

export default Home;