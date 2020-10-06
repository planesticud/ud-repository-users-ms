[Micro Servicio Users](https://repository.damillano.com/)
===

------

[Users](https://github.com/damillano93/ud-repository-users-ms/tree/develop/)
---

Users es el micro servicio que controla todo el registro, actualización y modificación de usuarios que ingresan al repositorio, además de brindarle al servicio toda la información sobre los roles y permisos que tiene cada usuario, para crear, consultar, modificar o deshabilitar cualquier archivo

### [Constants](https://github.com/damillano93/ud-repository-users-ms/tree/develop/constants/)
En este folder se manejan todas las contasntes del micro servicio.

* **[routers.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/constans-routes.md) :** Es una función que inicializa las rutas o end-points del micro servicio, que será usado para exponer el API Rest del mismo.

### [Controlers](https://github.com/damillano93/ud-repository-users-ms/tree/develop/controllers/)
Es el folder que contiene todos los controladores del micro servicio, los cuales ejecutan las sentencias que interactuan con la base de datos.

* **[usersController.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/controllers-usersController.md) :** Es el controlador encargado de crear, actualizar, consultar y eliminar los registros de la base de datos del micro servicio, todo esto a partir de las peticiones *HTML* que recibe.

### [Migrations](https://github.com/damillano93/ud-repository-users-ms/tree/develop/migrations/)
Es el folder que contiene todas las migraciones hechas a la hora de crear las tablas y campos en la base de datos, que servirán como base para la implementación del servicio tanto en los entornos de prueba, como en los de producción.

### [Models](https://github.com/damillano93/ud-repository-users-ms/tree/develop/models/)
Es el folder que contiene los modelos del micro servicio, que define el esquema de la base de datos, con todos sus campos, tipos de datos y valores requeridos.
* **[users.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/models-users.md) :** Es el modelo que contiene el esquema de la tabla creada para la base de datos, el cual es usado por el controlador, para ejecutar las acciones contenidas en él, siñendose a la esetrucutra y requerimientos del modelo en términos de la solicitud hecha.

### [Módulos de Node JS](https://github.com/damillano93/ud-repository-users-ms/tree/develop/node_modules/) 
Es el folder que contiene todos los modulos o librerías usadas por el micro servicio para hacer uso de toda la funcionalidad que brinda Node JS.  
Muchos de estos módulos se instalan por defecto cuando se crea el proyecto, y otro se agregan a medida que se requieren más funcionalidades.

### [Routers](https://github.com/damillano93/ud-repository-users-ms/tree/develop/routers/)
Es el folder que brinda la función de enrutar o redigir cada solicitud hecha a través de *HTML*, mediante un end-point, el cual hará uso de las funciones ubicadas en el controlador, para ejecutar una acción sobre la base de datos y el cual también retornará algún valor si es el caso.

* **[routes.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/routers-routes.md) :** Es el  que con base en las solicitudes o peticiones *HTML* hechas por el usuario (servicio o aplicación que consuma el API Rest expuesto), a los end-points configurados, hará la rediirección o enrutamiento de los mismos, para que servicios específicos ya definidos, realicen una tarea que puede o no retornar valores.

