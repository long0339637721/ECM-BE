const Model = require('./model')

class User extends Model {
  constructor() {
    super()
  }

  getAll(callback) {
    this.query(
      'SELECT * FROM User',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getTeacherAll(callback) {
    this.query(
      'SELECT * FROM Teacher, User WHERE Teacher.TID = ID',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getTeacherByDay(id, callback) {
    this.query(
      `Select u.ID as ID, FullName, Sex, c.CID as CID, CType, tiet_bat_dau, so_tiet, Name, NumStudent, b.ID as BID, b.status as status, b.note as note
      From Buoi_hoc b, Room r, User u, Class c
      Where b.TID = u.ID AND r.RID = b.RID AND c.CID = b.CID AND b.Ngay = ?
      Order by tiet_bat_dau`,
      [id]
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }
  
  getManagerAll(callback) {
    this.query(
      'SELECT * FROM Manager, User WHERE MID = ID',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getTeacherClass(callback) {
    this.query(
      'SELECT ID, FullName, Sex, CID, CType FROM Class, Teacher, User WHERE Teacher.TID = ID AND Class.TID = Teacher.TID',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get(id, callback) {
    this.query(
      'SELECT * FROM User W WHERE W.ID = ?',
      [id]
    )
      .then(results => {
        if (results.length === 0)
          callback(404, null)
        else
          callback(200, results[0])
      })
      .catch(() => callback(404, null))
  }

  getInfoByEmail(email, callback) {
    this.query(
      'SELECT * FROM User WHERE Email=?',
      [email]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('Email doesn\'t exists')
        else
          callback(200, results[0])
      })
      .catch(error => {
        if (error.message === 'Email doesn\'t exists')
          callback(405, null, error.message)
        else
          callback(400, null, 'Something were wrong, please try again')
      })
  }

  update(id, editedUser, callback) {
    
  }

  create(newUser, callback) {
    bcrypt.hash(newUser.password, 7)
      .then(hash => this.query(
        'INSERT INTO User SET ?',
        {
          ID: newUser.ID,
          SSN: newUser.SSN,
          Email: newUser.Email,
          Phone: newUser.Phone,
          FullName: newUser.FullName,
          Sex: newUser.Sex,
          Bdate: newUser.Bdate,
          Address: newUser.Address,
          UserName: newUser.UserName,
          Pass: hash
        }
      ))
      .then(results => this.query(
        'INSERT INTO ?  VALUES (?)',
        [newUser.Role, results.insertId]
      ))
      .then(() => callback(200, true, 'Create success', newUser.password))
      .catch((error) => {
        if (error.includes('Duplicate entry'))
          callback(400, false, 'email has been used', undefined)
        else
          callback(400, false, 'something wrong happened, please try again', undefined)
      })
  }

  changePassword(id, oldPassword, newPassword, callback) {
    this.query(
      'SELECT * FROM User WHERE id = ?',
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return bcrypt.compare(oldPassword, results[0]['password'])
      })
      .then(isMatch => {
        if (!isMatch)
          throw Error('old password is not correct')
        else
          return bcrypt.hash(newPassword, 7)
      })
      .then(hash => this.query(
        'UPDATE User SET Pass = ? WHERE id = ?',
        [hash, id],
      ))
      .then(() => callback(200, true, 'change password success'))
      .catch(error => {
        if (error.message === 'invalid id')
          callback(400, false, error.message)
        else if (error.message === 'old password is not correct')
          callback(405, false, error.message)
        else
          callback(400, false, 'something wrong was happened, please try again')
      })
  }

  delete(id, callback) {
    this.query(
      `SELECT * FROM User WHERE id = ?`,
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return this.query(
            'DELETE FROM User WHERE id = ?',
            [id],
          )
      })
      .then(() => {
        callback(200, true, 'delete success')
      })
      .catch(error => {
        console.log(error);
        if (error.message === 'invalid id')
          callback(406, false, error.message)
        else
          callback(400, false, 'something wrong happened, please try again')
      })
  }
}

module.exports = User