const UserModel = require('../models/user.model')
const UserView = require('../views/user.view')

const userModel = new UserModel()
const userView = new UserView()

class UserController {
    getAll(req, res) {
        userModel.getAll((users) => {
            userView.getAll(res, users)
        })
    }

    getTeacherAll(req, res) {
        userModel.getTeacherAll((users) => {
            userView.getTeacherAll(res, users)
        })
    }

    getTeacherByDay(req, res) {
        let id = req.params.id
        userModel.getTeacherByDay(id, (users) => {
            userView.getTeacherByDay(res, users)
        })
    }

    getManagerAll(req, res) {
        userModel.getManagerAll((users) => {
            userView.getManagerAll(res, users)
        })
    }

    getTeacherClass(req, res) {
        userModel.getTeacherClass((users) => {
            userView.getTeacherClass(res, users)
        })
    }

    get(req, res) {
        let id = Number.parseInt(req.params.id)
        userModel.get(id, (status, user) => {
            userView.get(res, status, user)
        })
    }

    getInfoByEmail(req, res) {
        let email = req.body.Email
        userModel.getInfoByEmail(email, (status, user, message) => {
            userView.getInfoByEmail(res, status, user, message)
        })
    }

    update(req, res) {
        let id = Number.parseInt(req.params.id)
        let editedUser = req.body

        userModel.update(id, editedUser, (status, result, message) => {
            userView.update(res, status, result, message)
        })
    }

    create(req, res) {
        let newUser = req.body

        // create a random string password
        // let password = new randexp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/).gen()
        // newUser.password = password

        userModel.create(newUser, (status, result, message, password) => {
            userView.create(res, status, result, message, password)
        })
    }

    changePassword(req, res) {
        let id = Number.parseInt(req.params.id)
        let newPassword = req.body.newPassword
        let oldPassword = req.body.oldPassword
        userModel.changePassword(id, oldPassword, newPassword, (status, result, message) => {
            userView.changePassword(res, status, result, message)
        })
    }

    delete(req, res) {
        let id = Number.parseInt(req.params.id)
        userModel.delete(id, (status, result, message) => {
            userView.delete(res, status, result, message)
        })
    }
}

module.exports = new UserController