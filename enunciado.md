1) Clonar el repo https://github.com/alsasoft/breakingbad-boot.git y trabajar dentro de la carpeta `version_npm_ericka`.
  * Crear un fichero `.gitignore` con el contenido:
```
dist
node_modules
.cache
```

2) Crear una rama llamada `feature_desarrollo`.
  * `git checkout -b feature_desarrollo`

3) Crear un archivo `package.json` con el siguiente contenido:
```json
{
  "name": "version_npm_ericka",
  "version": "1.0.0",
  "description": "Breaking Bad Workshop",
  "main": "main.js",
  "author": "Ericka Ramos",
  "license": "ISC"
}
```
  * Esta es una configuración básica para un proyecto de `npm`.

4) Instalar varias dependencias:
  * Desarrollo:
    * `chai` y `mocha` para desarrollar tests.
    * `babel-cli`, `babel-core` y `babel-preset-es2015` para transpilar código ES6. En este caso es necesatio para poder redactar los tests.
    * `parcel-bundler` para poder desplegar la aplicación.
  * Producción:
    * `jquery`, `popper.js` y `bootstrap` para la maquetación de la página web.
  * Los comandos serían:
    * `npm install chai mocha babel-cli babel-core babel-preset-es2015 parcel-bundler --save-dev`
    * `npm install jquery popper.js bootstrap`

Con esto vemos que se ha modificado el fichero `package.json` añadiendo dichas dependencias (y determinando las versiones automáticamente) y que se ha creado el fichero `package-lock.json`.


5) Creamos los siguientes ficheros (podemos seguir el vídeo desde el minuto 26:40)
  * `css/style.css`: Le ponemos un fondo cyan que luego borraremos, es sólo para ver si funciona.
```css
body {
    background-color: cyan !important;
}
```
  * `js/main.js`: Con `npm` es aquí donde debemos importar Bootstrap:
```javascript
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

console.log('Working!!!');
```
  * `index.html`: Con una estructura normal HTML. Omitimos las importaciones de Bootstrap tal como muestra el vídeo ya que se hacen de otra manera con `npm`.  
  
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Breaking Bad Site</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <h1>Comprueba que en la consolo javascript aparece el mensaje <pre>'Working!!!!'</pre> y después borra este bloque h1</h1>
    <script src="./js/main.js"></script>
</body>

</html>
```
  * `test/js/test.js`: Un test para comprobar que se ejecutan correctamente:
```javascript
const assert = require("chai").assert;

describe("Empty test: ", () => {
    it("Test are Working", () => {
        assert.equal("Test are Working", "Test are Working");
    });
});
```

6) Añadimos dos scripts a `package.json`, uno para lanzar la web y otro para los tests. Esto nos permite usar los comandos `npm start` y `npm test`:
```json
    "scripts": {
        "start": "parcel index.html",
        "test": "mocha test/**/*.js --require babel-core/register --reporter spec"
    }
```
  * Lanzamos ambos comandos y comprobamos que funcionan.
