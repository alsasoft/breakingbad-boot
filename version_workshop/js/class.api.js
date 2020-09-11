// 

export default class Apirest {

    constructor(pUrl) {
        this.api = pUrl;
    }

    async get(pEndPoint) {
        const url = this.api + pEndPoint;
        const peticion = await fetch(url, { method: 'GET' });
        if (peticion.status === 200) {
            let json = await peticion.json();
            return json;
        }
    }


    printSomething(pList, pObjectDom) {
        console.log(pList);
        pObjectDom.innerHTML = '';
        for (let character of pList) {
            pObjectDom.innerHTML += `<div class="col-12 col-xl-4">
                    <div class="card">
                        <img src="${character.img}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">Ocupacion: ${character.occupation}</p>
                            <p class="card-text">Estado: ${character.status}</p>
                        </div>
                    </div>
                </div>`;
        }
    }


    async getCharacterByName(pNombre) {
        const endPoint = 'characters?name=' + pNombre;
        const response = await this.get(endPoint);
        return response;
    }



}