import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioNotas = () => {
  
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChangeNota1 = (event) => {
    const value = event.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setNota1(value);
      setError('');
    } else {
      setError('Por favor ingresa solo números enteros.');
    }
  };

  const handleChangeNota2 = (event) => {
    const value = event.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setNota2(value);
      setError('');
    } else {
      setError('Por favor ingresa solo números enteros.');
    }
  };

  const handleChangeNota3 = (event) => {
    const value = event.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setNota3(value);
      setError('');
    } else {
      setError('Por favor ingresa solo números enteros.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nota1 || !nota2 || !nota3) {
      setError('Por favor completa todas las notas.');
      return;
    } else if (nota1 > 30 || nota2 > 30 || nota3 > 40) {
      setError("Las primeras dos notas no deben ser mayor a 30% y 40% para la tercera nota.");
    } else {
      const total = (parseFloat(nota1)) + (parseFloat(nota2)) + (parseFloat(nota3));
      let nuevoMensaje = '';
      if (total >= 90 && total <= 100) {
        nuevoMensaje = 'Sobresaliente';
      } else if (total >= 80 && total < 90) {
        nuevoMensaje = 'Muy Bueno';
      } else if (total >= 60 && total < 80) {
        nuevoMensaje = 'Bueno';
      } else {
        nuevoMensaje = 'Reprobado';
      }
      setMensaje(`Tu nota final es: ${total}%, ${nuevoMensaje}`);
      setError('');
    }
  };


  return (
    <div className="container mt-4 bg-light p-5 rounded">
      <h2 className="text-center text-primary mb-4">Calculadora de Notas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nota1" className="form-label">Nota Primer Parcial:</label>
          <input
            type="text"
            className="form-control"
            id="nota1"
            value={nota1}
            onChange={handleChangeNota1}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nota2" className="form-label">Nota Segundo Parcial:</label>
          <input
            type="text"
            className="form-control"
            id="nota2"
            value={nota2}
            onChange={handleChangeNota2}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nota3" className="form-label">Nota Tercer Parcial:</label>
          <input
            type="text"
            className="form-control"
            id="nota3"
            value={nota3}
            onChange={handleChangeNota3}
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary btn-block">Calcular</button>
      </form>
      {mensaje && <div className="alert alert-info mt-3 text-center">{mensaje}</div>}
    </div>
  );
};

export default FormularioNotas;