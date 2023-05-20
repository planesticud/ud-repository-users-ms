const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { users } = require('../models')
const dbQueries = require('../utils/dbQueries')
const usersController = module.exports
const log = logger.getLogger('usersController')

usersController.contarUsers = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
    where = {}
  }
  log.info(`listUsers ${JSON.stringify(where)} `)
  const users = (await dbQueries.select('users', where)).length
  res.json(users)
}

usersController.listUsers = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
    where = {}
  }
  log.info(`listUsers ${JSON.stringify(where)} `)
  const users = await dbQueries.select('users', where)
  res.json(users)
}

usersController.createUsers = async (req, res) => {
  const { body } = req
  log.info(`createUsers body=${JSON.stringify(body)} `)
  const errors = isValid(body, users.usersSchema)
  if (errors.length) {
    log.error(`createUsers invalid body `)
    res.status(BAD_REQUEST).json({ error: errors })
  } else {
    const newItem = await dbQueries.insert('users', body);
   // log.info(`user created with id=${newItem[0].id}`);
    res.status(201).json(newItem);
  }
}

usersController.deleteUsers = async (req, res) => {
  const { id } = req.query
  log.info(`deleteUsers id=${id} `)
  const del = await dbQueries.delete('users', id)
  res.json(del)
}

usersController.updateUsers = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateUsers id=${id} body=${JSON.stringify(body)}`)

  const errors = isValid(body, users.usersSchemaUpdate)
  if (errors.length) {
    log.error(`updateUsers invalid body `)
    res.status(400).json({ error: errors })
  }

  const upd = await dbQueries.update('users', id, body)
  res.json(upd)
}
