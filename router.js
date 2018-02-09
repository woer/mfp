const Router = require('koa-router')
const router = new Router()
const user = require('./controller/user')

router.get('/user/profile', user.profile)

module.exports = router
