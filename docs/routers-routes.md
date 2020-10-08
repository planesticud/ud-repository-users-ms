[routes.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/routers-routes.md)
===

------

Aquí se hace uso de la constante [routes.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/constants-routes.md), que permite llamar  las variables (rutas) definidas como end-point y ejecutar una acción según sea la petición HTTP realizada por el cliente que consume la API, a partir de los controladores.

Todo lo anterior se puedo usar gracias al framework **express**, la cual ofrece meacanismos para :
* Escritura de manejadores de peticiones con diferentes verbos *HTTP*.
* Integración con varios motores de renderización, para la generación de respuestas
* Establecer ajustes de la aplicaicón web , como el puerto que usa la aplicación o la localización de las plantillas que se utilizan para renderizar la respueta.
* Añadir procesamiento de peticiones "middleware" adicional  en cualquier punto del pipeline    de manejo de la petición


```js
const express = require('express')
const router = express.Router()

router.get(routers.USERS, wrap(usersController.listUsers))

router.post(routers.USERS, wrap(usersController.createUsers))

router.put(routers.USERS, wrap(usersController.updateUsers))

router.delete(routers.USERS, wrap(usersController.deleteUsers))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
}))

module.exports = router
```

