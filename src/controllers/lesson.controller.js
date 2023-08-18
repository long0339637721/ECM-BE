const LessonModel = require('../models/lesson.model')
const LessonView = require('../views/lesson.view')

const lessonModel = new LessonModel()
const lessonView = new LessonView()

class LessonController {
    getAll(req, res) {
        lessonModel.getAll((lessons) => {
            lessonView.getAll(res, lessons)
        })
    }

    get(req, res) {
        let id = Number.parseInt(req.params.id)
        lessonModel.get(id, (status, Lesson) => {
            lessonView.get(res, status, Lesson)
        })
    }

    getByTeacher(req, res) {
        let id = req.params.id
        lessonModel.getByTeacher(id, (lessons) => {
            lessonView.getByTeacher(res, lessons)
        })
    }

    getDay(req, res) {
        let day = req.params.day
        console.log(day)
        lessonModel.getDay(day, (lessons) => {
            lessonView.getDay(res, lessons)
        })
    }

    getHoc(req, res) {
        let id = req.params.id
        lessonModel.getHoc(id, (lessons) => {
            lessonView.getHoc(res, lessons)
        })
    }

    getStudentPresent(req, res) {
        console.log("ok")
        lessonModel.getStudentPresent((lessons) => {
            lessonView.getStudentPresent(res, lessons)
        })
    }


    update(req, res) {
        let id = (req.params.id)
        let editedLesson = req.body

        lessonModel.update(id, editedLesson, (status, result, message) => {
            lessonView.update(res, status, result, message)
        })
    }
    updateHoc(req, res) {
        let id = (req.params.id).split('-')
        let BID = id[0]
        let SID = id[1]
        let editedLesson = req.body

        lessonModel.updateHoc(BID, SID, editedLesson, (status, result, message) => {
            lessonView.updateHoc(res, status, result, message)
        })
    }

    create(req, res) {
        let newLesson = req.body
        lessonModel.create(newLesson, (status, result, message) => {
            lessonView.create(res, status, result, message)
        })
    }
    createHoc(req, res) {
        let newLesson = req.body
        lessonModel.createHoc(newLesson, (status, result, message) => {
            lessonView.createHoc(res, status, result, message)
        })
    }

    delete(req, res) {
        let id = Number.parseInt(req.params.id)
        lessonModel.delete(id, (status, result, message) => {
            lessonView.delete(res, status, result, message)
        })
    }
}

module.exports = new LessonController