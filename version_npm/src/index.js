import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import Apirest from "./apirest.js";

const contentCharacters = document.querySelector('#characters');
const btnBuscar = document.querySelector('#btnBuscar');
const inputNombre = document.querySelector('#nombre');
const breakingbad = new Apirest('https://www.breakingbadapi.com/api');

breakingbad.getCharacter()
    .then(result => {
        breakingbad.printCharacters(result, contentCharacters);
    })
    .catch(err => {
        console.log(err);
    })


btnBuscar.addEventListener('click', recogerNombre);

async function recogerNombre(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    const busqueda = await breakingbad.getCharacterByName(nombre);
    breakingbad.printCharacters(busqueda, contentCharacters);
}

console.log('Working! By Manolo');