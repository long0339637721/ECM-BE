class StudentView {
  getAll(res, students) {
    if (students) {
      res.status(200).json({
        result: 'success',
        message: 'get all student',
        size: students.length,
        students: students
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        students: null
      })
    }
  }

  getStudentInClass(res, status, students) {
    if (students) {
      res.status(status).json({
        result: 'success',
        message: 'get all student in class',
        size: students.length,
        students: students
      })
    }
    else {
      res.status(status).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        students: null
      })
    }
  }

  get(res, status, student) {
    if (student) {
      res.status(status).json({
        result: 'success',
        message: 'get student by id',
        student: student
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

  delete(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }
}

module.exports = StudentView