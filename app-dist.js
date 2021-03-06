"use strict";

/*
document.getElementById('app').innerHTML = '<p id="title">Arriba React, abajo los aburridos de angular</p>';/


const parrafo = document.createElement('p');
const spanTexto = document.createElement('span');
parrafo.setAttribute('id', 'title');
parrafo.textContent = 'Angular';
spanTexto.textContent = ' es lo mejor';

parrafo.appendChild(spanTexto);
document.getElementById('app').appendChild(parrafo);


// REACT
// Tipo de elemento , atributo , hijos
const elemento = React.createElement('p', { id: 'title' }, 'Angular ', React.createElement('span', null, 'es lo mejor' ));// null indica que el parametro no existe


// Metodo render( elemento , contenedor del elemento)
ReactDOM.render(elemento, document.getElementById('app'))



// JSX


const elemento = <p id='title' className='title'> React { 'javascript'.toUpperCase() } < span > es lo mejor</span></p>

ReactDOM.render(elemento, document.getElementById('app'));

*/

// const Saludar = props => {
//   return <p>Hola {props.nombre}</p>
// }
// Dos propiedades
var Saludar = function Saludar(_ref) {
  var nombre = _ref.nombre,
      apellido = _ref.apellido;

  return (// Los elementos del componente deben estar envueltos
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hola ",
        nombre
      ),
      React.createElement(
        "p",
        null,
        " Apellido: ",
        apellido,
        " "
      )
    )
  );
};

ReactDOM.render(React.createElement(Saludar, { nombre: "Ismary", apellido: "Salges" }), document.getElementById('app'));