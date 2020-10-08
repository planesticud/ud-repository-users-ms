[knexfile.js](https://github.com/damillano93/ud-repository-users-ms/blob/develop/docs/utils-knexfile.md)
===

------

Es la plantilla donde se definen todas las contantes y parámetros que se usan para la conexión con la base de datos.  
Además allí se establecen los entornos en los que se hará uso del micro servicio.

**Nota :** Las credenciales de conexión a la base de datos, se manejan como variables de entorno, para brindarle seguridad y protección a la base de datos.

```js
const {
  DB_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_USER
} = process.env

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
          host: DB_HOST || 'localhost',
          database: DB_NAME || 'users',
          user:     DB_USER || 'postgres',
          password: DB_PASSWORD || 'changeme'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: '../migrations',
        tableName: 'knex_migrations'
      }
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };
```