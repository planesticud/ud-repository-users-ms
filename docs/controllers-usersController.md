[usersController.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/controllers-usersController.md)
===

------

Aquí se ejecutan todas las peticiones *HTTP* hechas al servicio y se ejerce todo el control sobre la base de datos. Entre las funciones que maneja este controlador, se encuentran
* Creación 
    ```js
    usersController.createUsers = async (req, res) => {
    const { body } = req
    log.info(`createUsers body=${JSON.stringify(body)} `)
    const errors = isValid(body,users.usersSchema)
    if(errors.length){
        log.error(`createUsers invalid body `)
        res.status(BAD_REQUEST).json({error: errors})
    }
    dbQueries.insert('users', body)
    
    res.sendStatus(CREATED)
    }
    ```
* Actualización 
    ```js
    usersController.updateUsers = async (req, res) => {
    const { body } = req
    const { id } = req.query
    log.info(`updateUsers id=${id} body=${JSON.stringify(body)}`)
    
    const errors = isValid(body,users.usersSchemaUpdate)
    if(errors.length){
        log.error(`updateUsers invalid body `)
        res.status(400).json({error: errors})
    }
    ```
* Borrado 
    ```js
    usersController.deleteUsers = async (req, res) => {
    const { id } = req.query
    log.info(`deleteUsers id=${id} `)
    const del = await dbQueries.delete('users', id)
    res.json(del)
    }
    ```
* Consulta General 
    ```js
    let where = req.query
    if (Object.keys(where).length === 0) {
        where = {}
    }
    log.info(`listUsers ${JSON.stringify(where)} `)
    const users = await dbQueries.select('users', where)
    res.json(users)
    }
    ```

Cada función retornará una respuesta, que contiene información relevante para las funcionalidades que tiene el micro servicio que consume esta API.
