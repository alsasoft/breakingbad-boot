import Apirest from "./class.api.js";


const btn = document.querySelector('#btnBuscar');
const inputBusqueda = document.querySelector('.form-control');
const sectionCharacter = document.querySelector('#characters');

//consultar nuestra api a traves de mi objeto Apirest
const breakingBad = new Apirest('https://www.breakingbadapi.com/api/');

breakingBad.get('characters')
    .then(result => {
        breakingBad.printSomething(result, sectionCharacter);
    })

btn.addEventListener('click', recogerBusqueda);



async function recogerBusqueda(event) {
    event.preventDefault();

    let palabra = inputBusqueda.value
    const busqueda = await breakingBad.getCharacterByName(palabra);
    breakingBad.printSomething(busqueda, sectionCharacter);

}




