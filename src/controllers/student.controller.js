const StudentModel = require('../models/student.model')
const StudentView = require('../views/student.view')

const studentModel = new StudentModel()
const studentView = new StudentView()

class StudentController {
    getAll(req, res) {
        studentModel.getAll((students) => {
            studentView.getAll(res, students)
        })
    }

    getStudentInClass(req, res) {
        let id = Number.parseInt(req.params.id)
        studentModel.getStudentInClass(id, (status, students) => {
            studentView.getStudentInClass(res, status, students)
        })
    }

    get(req, res) {
        let id = Number.parseInt(req.params.id)
        studentModel.get(id, (status, student) => {
            studentView.get(res, status, student)
        })
    }

    update(req, res) {
        let id = Number.parseInt(req.params.id)
        let editedStudent = req.body

        studentModel.update(id, editedStudent, (status, result, message) => {
            studentView.update(res, status, result, message)
        })
    }

    create(req, res) {
        let newStudent = req.body
        studentModel.create(newStudent, (status, result, message) => {
            studentView.create(res, status, result, message)
        })
    }

    delete(req, res) {
        let id = Number.parseInt(req.params.id)
        studentModel.delete(id, (status, result, message) => {
            studentView.delete(res, status, result, message)
        })
    }
}

module.exports = new StudentController