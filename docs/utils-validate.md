[validate.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/utils-validate.md)
===

------

Brinda una funcionalidad para la verificación y validación de la estructura correcta de los datos ingreseados para el registro en la base datos. Con esto se busca, brindarle soporte y robustes a las consutlas de registro y actualización a la base de datos, ya que valida que la estructura de los datos que vienen en la petición *HTTP*, sea la correcta.



```js
const Validator = require('jsonschema').Validator;

const valid = module.exports


valid.isValid = (instance, schema) => {
const validation = new Validator();
const  ValidatorResult  = validation.validate(instance, schema)

return ValidatorResult.errors
}

```