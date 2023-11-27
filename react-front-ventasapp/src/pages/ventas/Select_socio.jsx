import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
function SelectSocio({ onChange }) {

  const [socios, setSocios] = useState([]);
  const [selectedCSocioId, setSelectedSocioId] = useState('');
  // token
  const token = localStorage.getItem("token");
  // end token
  useEffect(() => {
    obtenerSocios();
  }, []);

  const obtenerSocios = () => {
    axios
      .get(`${API_URL}/socio`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSocios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSeleccionarSocio = (event) => {
    const socioId = event.target.value;
    setSelectedSocioId(socioId);
    //onChange({ id: socioId });
    onChange(socioId);
  };

  return (
    <select value={selectedCSocioId} onChange={handleSeleccionarSocio}>
      <option value="">Seleccionar Socio</option>
      {socios.map((socio) => (
        <option key={socio.id} value={socio.id}>
          {socio.nombre}
        </option>
      ))}
    </select>
  );
}

export default SelectSocio;