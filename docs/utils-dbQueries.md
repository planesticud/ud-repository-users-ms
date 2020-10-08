[dbQueries.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/utils-dbQueries.md)
===

------

Esta plantilla define las funciones básicas que permiten ejecutar comandos SQL haciendo uso de la librería **db.js**, **knex.js** y **[knexfile.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/utils-knexfile.md)**, con lo cual el micro servicio puede interactuar con su base de datos.


* SELECT 
    ```js
    dbQueries.select = async (table, where) => {
        const data = await db(table).select('*').where(where)
        return data
    }

    ```
* DELETE 
    ```js
    dbQueries.delete = async (table, id) => {
        const del = await db(table).where({id}).delete()
        return del
    }
    ```
* INSERT 
    ```js
    dbQueries.insert = async (table, data) => {
        const query = await db(table).insert(data)
        return query
    }

    ```
* UPDATE
    ```js
    dbQueries.update = async (table, id, data) => {
        const update = await db(table).where({id}).update({updated_at: db.fn.now(), ...data}).returning('*')
        return update
    }
    ```