class ClassView {
  getAll(res, classes) {
    if (classes) {
      res.status(200).json({
        result: 'success',
        message: 'get all classes',
        size: classes.length,
        classes: classes
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        classes: null
      })
    }
  }

  getLesson(res, classes) {
    if (classes) {
      res.status(200).json({
        result: 'success',
        message: 'get all classes',
        size: classes.length,
        classes: classes
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        classes: null
      })
    }
  }

  getClassInClass(res, status, classes) {
    if (classes) {
      res.status(status).json({
        result: 'success',
        message: 'get all class in class',
        size: classes.length,
        classes: classes
      })
    }
    else {
      res.status(status).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        classes: null
      })
    }
  }

  get(res, status, Class) {
    if (Class) {
      res.status(status).json({
        result: 'success',
        message: 'get Class by id',
        Class: Class
      })
    }
    else {
      res.status(status).json({
        result: 'fail',
        message: 'id not exist, please check again',
      })
    }
  }

  update(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }

  create(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message,
    })
  }
  AddStudent(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message,
    })
  }

  delete(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }
}

module.exports = ClassView