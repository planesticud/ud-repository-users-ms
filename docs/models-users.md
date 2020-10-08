[users.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/models-users.md)
===

------

Este modelo contiene los esquemas que definen las tablas usadas para guardar los datos de los usuarios, esto le permite al controlador hacer uso de las variables sin conectarse directamente a la base datos, y a demás definir ciertas reglas que deben cumplir los campos, para ser procesados.

* Users 
    ```js
    const usersSchema = {
        'id': '/usersSchema',
        'type': 'object',
        'properties': {
            'name': { 'type': 'string' },
            'email':  { 'type': 'string' },
            'rol':  { 'type': 'string' }
        },
        'required': ['name','email', 'rol']
    };
    ```
* Update Users 
    ```js
    const usersSchemaUpdate = {
        'id': '/usersSchema',
        'type': 'object',
        'properties': {
            'name': { 'type': 'string' },
            'email':  { 'type': 'string' },
            'rol':  { 'type': 'string' }
        },
        'required': ['email']
    };

    ```


Los esquemas se definen como variables constantes que luego se exportan para que sean visibles para el micro servicio.

```js
module.exports = {
    usersSchema,
    usersSchemaUpdate
}
```
