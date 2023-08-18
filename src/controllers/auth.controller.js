const AccountModel = require('../models/auth.model')
const AuthView = require('../views/auth.view')

const accountModel = new AccountModel()
const authView = new AuthView()

class AuthController {
    login(req, res) {
        let username = req.body.username
        let password = req.body.password

        accountModel.login(username, password, (status, result, message, ID, accessToken, refreshToken, role) => {
            authView.login(res, status, result, message, ID, accessToken, refreshToken, role)
        })
    }

    renewAccessToken(req, res) {
        let refreshToken = req.body.refreshToken

        accountModel.renewAccessToken(refreshToken, (status, result, message, accessToken) => {
            authView.renewAccessToken(res, status, result, message, accessToken)
        })
    }

    logout(req, res) {
        let refreshToken = req.body.refreshToken

        accountModel.logout(refreshToken, (status, result, message) => {
            authView.logout(res, status, result, message)
        })
    }
}

module.exports = new AuthController