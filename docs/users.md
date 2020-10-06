[Micro Servicio Users](https://repository.damillano.com/)
===

------

Users
---

Users es el micro servicio que controla todo el registro, actualización y modificación de usuarios que ingresan al repositorio, además de brindarle al servicio toda la información sobre los roles y permisos que tiene cada usuario, para crear, consultar, modificar o deshabilitar cualquier archivo

### Constants 
En este folder se manejan todas las contasntes del micro servicio.


More documentation.

You could put a links as this way https://repository.damillano.com/files
### JS code insert
Also you could put some code that you should document.
```js
const Validator = require('jsonschema').Validator;

const valid = module.exports


valid.isValid = (instance, schema) => {
const validation = new Validator();
const  ValidatorResult  = validation.validate(instance, schema)

return ValidatorResult.errors
}

```


--------


### Code in HTML
Try this

````html
<span>{{ someProperty }}</span> 
````

Can be rewritten as:

````html
<span ng-bind="someProperty"></span>
````

Also you could put some list to indicate things like that

* This a first way
- This is other way
1. This is a numerate list
    - Also it's posible have subidentation.

--------

**Bold your text**
*Change shape* 

------- 
It is too important remaind that you could write one after other, but if you wish to do an line jump, you could do this in 2 ways
1. Given 2 enters like that

This is an example to do a line jump 

with 2 enters

2. Or given more than 2 spaces and 1 enter like that

This the second example to tho a line jump    
with 2 spaces an 1 enter

$$\frac{1}{n}$$