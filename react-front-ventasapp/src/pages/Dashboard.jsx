import React from 'react';
import 'black-dashboard-react/css/black-dashboard-react.min.css';

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
