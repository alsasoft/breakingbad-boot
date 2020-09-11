export default class Apirest {

    constructor(pUrl) {
        this.api = pUrl;
    }

    async get(pEndPoint) {
        const url = this.api + pEndPoint;
        let peticion = await fetch(url, { method: 'GET' });
        if (peticion.status === 200) {
            let json = await peticion.json();
            return json;
        } else {
            return peticion.statusText;
        }

    }

    async getCharacter(pNumber = '') {
        const parameters = (pNumber !== '') ? `/characters/${pNumber}` : `/characters`;
        let response = await this.get(parameters);
        return response;
    }

    async getCharacterByName(pNombre) {
        const parameters = `/characters?name=${pNombre}`;
        let response = await this.get(parameters);
        return response;
    }


    printCharacters(pListCharacters, pObjectoDom) {
        pObjectoDom.innerHTML = '';
        pListCharacters.forEach(character => {
            pObjectoDom.innerHTML += `<div class="col-12 col-xl-4 mb-3">
                        <div class="card">
                            <img src="${character.img}"
                                class="card-img-top">
                            <div class="card-body text-light">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">Ocupación: ${character.occupation}</p>
                                <p class="card-text">Estado: ${character.status}</p>
                                <a href="#" class="btn btn-warning btn-block">Ver personaje</a>
                            </div>
                        </div>
                    </div>`
        });


    }



}