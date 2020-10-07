[routers.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/constans-routes.md)
===

------


La función del modulo **routers** es definir diferentes end-points que tendrá el micro servicio, con el fin de facilitar la actualización o modificación de las diferentes rutas que se configuren a lo largo del desarrollo.

Lo primero que se realiza, es la creación de las rutas como constantes. 
```js
const USERS = '/users'
const HEALTH = '/health'

```
Para añadir más end-points, lo único que se debe es definir la constante, con el nombre de la ruta que desea, donde luego se procede con la exportación para su posterior uso por parte del micro servicio.
```js
module.exports = {
    USERS,
    HEALTH
}
```

