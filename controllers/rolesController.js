const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { roles } = require('../models')
const dbQueries = require('../utils/dbQueries')
const rolesController = module.exports
const log = logger.getLogger('rolesController')


rolesController.listRoles = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
    where = {}
  }
  log.info(`listRoles ${JSON.stringify(where)} `)
  const roles = await dbQueries.select('roles', where)
  res.json(roles)
}

rolesController.createRoles = async (req, res) => {
  const { body } = req
  log.info(`createRoles body=${JSON.stringify(body)} `)
  const errors = isValid(body, roles.rolesSchema)
  if (errors.length) {
    log.error(`createRoles invalid body `)
    res.status(BAD_REQUEST).json({ error: errors })
  } else {
    const newItem = await dbQueries.insert('roles', body);
   // log.info(`roles created with id=${newItem[0].id}`);
    res.status(201).json(newItem);
  }
}

rolesController.deleteRoles = async (req, res) => {
  const { id } = req.query
  log.info(`deleteRoles id=${id} `)
  const del = await dbQueries.delete('roles', id)
  res.json(del)
}

rolesController.updateRoles = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateRoles id=${id} body=${JSON.stringify(body)}`)

  const errors = isValid(body, roles.rolesSchemaUpdate)
  if (errors.length) {
    log.error(`updateRoles invalid body `)
    res.status(400).json({ error: errors })
  }

  const upd = await dbQueries.update('roles', id, body)
  res.json(upd)
}
