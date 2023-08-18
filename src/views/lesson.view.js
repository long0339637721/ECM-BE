class LessonView {
  getAll(res, lessons) {
    if (lessons) {
      res.status(200).json({
        result: 'success',
        message: 'get all lessons',
        size: lessons.length,
        lessons: lessons
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        lessons: null
      })
    }
  }

  getByTeacher(res, lessons) {
    if (lessons) {
      res.status(200).json({
        result: 'success',
        message: 'get all lessons',
        size: lessons.length,
        lessons: lessons
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        lessons: null
      })
    }
  }

  getDay(res, lessons) {
    if (lessons) {
      res.status(200).json({
        result: 'success',
        message: 'get all lessons',
        size: lessons.length,
        lessons: lessons
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        lessons: null
      })
    }
  }

  getHoc(res, lessons) {
    if (lessons) {
      res.status(200).json({
        result: 'success',
        message: 'get all lessons',
        size: lessons.length,
        lessons: lessons
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        lessons: null
      })
    }
  }

  getStudentPresent(res, lessons) {
    if (lessons) {
      res.status(200).json({
        result: 'success',
        message: 'get all lessons',
        size: lessons.length,
        lessons: lessons
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        lessons: null
      })
    }
  }
  
  get(res, status, Lesson) {
    if (Lesson) {
      res.status(status).json({
        result: 'success',
        message: 'get Lesson by id',
        Lesson: Lesson
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
  updateHoc(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }

  createHoc(res, status, result, message) {
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

module.exports = LessonView