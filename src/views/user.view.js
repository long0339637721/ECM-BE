class UserView {
  getAll(res, users) {
    if (users) {
      res.status(200).json({
        result: 'success',
        message: 'get all user',
        size: users.length,
        users: users
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        users: null
      })
    }
  }

  getTeacherAll(res, users) {
    if (users) {
      res.status(200).json({
        result: 'success',
        message: 'get all user',
        size: users.length,
        users: users
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        users: null
      })
    }
  }

  getTeacherByDay(res, users) {
    if (users) {
      res.status(200).json({
        result: 'success',
        message: 'get all user',
        size: users.length,
        users: users
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        users: null
      })
    }
  }

  getManagerAll(res, users) {
    if (users) {
      res.status(200).json({
        result: 'success',
        message: 'get all user',
        size: users.length,
        users: users
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        users: null
      })
    }
  }
  
  getTeacherClass(res, users) {
    if (users) {
      res.status(200).json({
        result: 'success',
        message: 'get all user',
        size: users.length,
        users: users
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        users: null
      })
    }
  }

  get(res, status, user) {
    if (user) {
      res.status(status).json({
        result: 'success',
        message: 'get user by id',
        user: user
      })
    }
    else {
      res.status(status).json({
        result: 'fail',
        message: 'id not exist, please check again',
      })
    }
  }

  getInfoByEmail(res, status, user, message) {
    if (user) {
      res.status(status).json({
        result: 'success',
        user
      })
    }
    else {
      res.status(status).json({
        result: 'fail',
        message
      })
    }
  }

  update(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }

  create(res, status, result, message, password) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message,
      password
    })
  }

  changePassword(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }

  delete(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }
}

module.exports = UserView