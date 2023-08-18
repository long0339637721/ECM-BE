const userRoute = require('./user.route')
const studentRoute = require('./student.route')
const classRoute = require('./class.route')
const roomRoute = require('./room.route')
const lessonRoute = require('./lesson.route')
const authRoute = require('./auth.route')
const verifyJWT = require('../middlewares/verifyJWT')

const route = (app) => {
  app.use('/auth', authRoute)
  app.use(verifyJWT)
  app.use('/user', userRoute)
  app.use('/student', studentRoute)
  app.use('/class', classRoute)
  app.use('/room', roomRoute)
  app.use('/lesson', lessonRoute)
}

module.exports = route