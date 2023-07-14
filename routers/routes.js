const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const { usersController, rolesController } = require('../controllers')

const router = express.Router()

router.get(routers.USERS+"/contar", wrap(usersController.contarUsers))

router.get(routers.USERS, wrap(usersController.listUsers))

router.post(routers.USERS, wrap(usersController.createUsers))

router.put(routers.USERS, wrap(usersController.updateUsers))

router.delete(routers.USERS, wrap(usersController.deleteUsers))

router.get(routers.ROLES, wrap(rolesController.listRoles))

router.post(routers.ROLES, wrap(rolesController.createRoles))

router.put(routers.ROLES, wrap(rolesController.updateRoles))

router.delete(routers.ROLES, wrap(rolesController.deleteRoles))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))
  router.get("/test_users_ci", wrap(async (req, res) => {
    res.status(OK).json({ message: 'THis a test for users ci' })
  }))

module.exports = router