import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { App } from './HelloWorldApp';

import './styles.css'; // De esta manera le damos estilos a los componentes y al html en general

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
         <CounterApp value={0} /> 
    </React.StrictMode>
) // Aqui lo que hacemos es renderizar React en Strict Mode dentro del div root, y dentro de este renderizamos el componente App. Generalmente los componentes se ponen en mayuscula al inicio
