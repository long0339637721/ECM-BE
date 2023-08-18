const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Model = require('./model')

class AccountModel extends Model {
  constructor() {
    super()
  }

  login(Username, password, callback) {
    this.query(
      'SELECT * FROM User WHERE Username = ?',
      [Username]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('Username doesn\'t exist');
        else {
          let hash = results[0].Pass
          // return bcrypt.compare(password, hash)
          return hash === password
        }
      })
      .then(isMatch => {
        if (!isMatch)
          throw Error('password is not correct')
        else
          return this.query(
            'SELECT * FROM User, Admin WHERE Username = ? AND User.ID = Admin.AID',
            [Username]
          )
            .then(res => {
              if (res.length !== 0) {
                res[0].Role = 'Admin'
                return res
              }
              return this.query(
                'SELECT * FROM User, Manager WHERE Username = ? AND User.ID = MID',
                [Username]
              )
                .then (res => {
                  if (res.length !== 0) {
                    res[0].Role = 'Manager'
                    return res
                  }
                  return this.query(
                    'SELECT * FROM User, Teacher WHERE Username = ? AND User.ID = TID',
                    [Username]
                  )
                })
            })
      })
      .then(results => {
        console.log(results)
        let accessToken, refreshToken
        let role = results[0].Role ? results[0].Role : "Teacher"
        console.log(role)
        accessToken = jwt.sign(
          {
            Username: Username,
            role: role
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '1d' }
        )
        refreshToken = jwt.sign(
          {
            Username: Username,
            role: role
          },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: '3d' }
        )
        console.log(accessToken)
        console.log(refreshToken)
        
        return this.query(
          'UPDATE User SET refreshToken = ? WHERE Username = ?',
          [refreshToken, Username]
        )
          .then(() => callback(200, true, 'login success', results[0].ID, accessToken, refreshToken, role))
          .catch(() => callback(400, false, '2 something were wrong, please try again'))
      })
      .catch(error => {
        if (error?.message === 'Username doesn\'t exist')
          callback(401, false, error.message)
        else if (error?.message === 'password is not correct')
          callback(401, false, error.message)
        else
          callback(400, false, 'something were wrong, please try again')
      })
  }

  renewAccessToken(refreshToken, callback) {
    this.query(
      'SELECT * FROM User WHERE refreshToken = ?',
      [refreshToken]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('refresh token is not correct')
        else {
          jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (error, decoded) => {
              console.log(decoded)
              if (error || decoded.Username !== results[0].Username) {
                callback(401, false, 'refresh token is not correct')
              }
              else {
                const accessToken = jwt.sign(
                  {
                    Username: results[0].Username,
                    role: decoded.role
                  },
                  process.env.ACCESS_TOKEN_SECRET,
                  { expiresIn: '3d' }
                )

                callback(200, true, 'create new access token success', accessToken)
              }
            }
          )
        }
      })
      .catch(error => callback(401, false, error.message))
  }

  logout(refreshToken, callback) {
    this.query(
      'UPDATE User SET refreshToken = null WHERE refreshToken = ?',
      [refreshToken]
    )
      .then(() => callback(200, true, 'logout success'))
      .catch((error) => callback(400, false, 'something were wrong, please try again'))
  }
}

module.exports = AccountModel