const ClassModel = require('../models/class.model')
const ClassView = require('../views/class.view')

const classModel = new ClassModel()
const classView = new ClassView()

class ClassController {
    getAll(req, res) {
        classModel.getAll((classs) => {
            classView.getAll(res, classs)
        })
    }

    getLesson(req, res) {
        let id = req.params.id
        classModel.getLesson(id, (classs) => {
            classView.getLesson(res, classs)
        })
    }

    getClassInClass(req, res) {
        let id = Number.parseInt(req.params.id)
        console.log(id)
        classModel.getClassInClass(id, (status, classs) => {
            classView.getClassInClass(res, status, classs)
        })
    }

    get(req, res) {
        let id = Number.parseInt(req.params.id)
        classModel.get(id, (status, Class) => {
            classView.get(res, status, Class)
        })
    }

    update(req, res) {
        let id = Number.parseInt(req.params.id)
        let editedClass = req.body

        classModel.update(id, editedClass, (status, result, message) => {
            classView.update(res, status, result, message)
        })
    }

    create(req, res) {
        let newClass = req.body
        classModel.create(newClass, (status, result, message) => {
            classView.create(res, status, result, message)
        })
    }
    AddStudent(req, res) {
        let newClass = req.body
        classModel.AddStudent(newClass, (status, result, message) => {
            classView.AddStudent(res, status, result, message)
        })
    }

    delete(req, res) {
        let id = Number.parseInt(req.params.id)
        classModel.delete(id, (status, result, message) => {
            classView.delete(res, status, result, message)
        })
    }
}

module.exports = new ClassController