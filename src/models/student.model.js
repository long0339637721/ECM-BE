const Model = require('./model')

class Student extends Model {
  constructor() {
    super()
  }

  getAll(callback) {
    this.query(
      'SELECT * FROM Student',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getStudentInClass(id, callback) {
    this.query(
      'SELECT * FROM thuoc t, Class C WHERE t.SID = ? AND C.CID = t.CID',
      [id]
    )
      .then(results => {
        if (results.length === 0)
          callback(404, null)
        else
          callback(200, results)
      })
      .catch(() => callback(404, null))
  }

  get(id, callback) {
    this.query(
      'SELECT * FROM Student s WHERE s.ID = ?',
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

  update(id, editedStudent, callback) {
    this.query(
      `SELECT * FROM Student WHERE id = ?`,
      [id]
    )
      .then(results => {
        if (!id || results.length === 0)
          throw Error('invalid id')
        else {
          let query = 'UPDATE Student S SET '
          if (editedStudent.Sex !== undefined) {
            query += `S.Sex = '${editedStudent.Sex}',`
          }
          if (editedStudent.Email !== undefined) {
            query += `S.Email = '${editedStudent.Email}',`
          }
          if (editedStudent.FullName !== undefined) {
            query += `S.FullName = '${editedStudent.FullName}',`
          }
          if (editedStudent.Phone !== undefined) {
            query += `S.Phone = '${editedStudent.Phone}',`
          }
          if (editedStudent.Bdate !== undefined) {
            query += `S.Bdate = '${editedStudent.Bdate}',`
          }
          if (editedStudent.Address !== undefined) {
            query += `S.Address = '${editedStudent.Address}',`
          }
          let res = query.substring(0, query.length -1)
          console.log(query)
          res += ` WHERE S.ID = ${id}`
          this.query(res)
            .then(() => {
              callback(200, true, 'update success') 
            })
            .catch((error) => {
              console.log(error)
              callback(400, false, 'Something wrong happened, please try again')
            })
        }
      })
      .catch(error => {
        console.log(error);
        if (error.message === 'invalid id')
          callback(404, false, error.message)
        else
          callback(400, false, 'Something wrong happened, please try again')
      })
  }

  create(newStudent, callback) {
      this.query(
        'INSERT INTO Student SET ?',
        {
          ID: newStudent.ID,
          Email: newStudent.Email,
          Phone: newStudent.Phone,
          FullName: newStudent.FullName,
          Sex: newStudent.Sex,
          Bdate: newStudent.Bdate,
          Address: newStudent.Address,
        }
      )
      .then(results => this.query(
        'INSERT INTO thuoc VALUES (?, ?)',
        [newStudent.CID, newStudent.ID]
      ))
      .then(() => callback(200, true, 'Create success'))
      .catch((error) => {
        if (error.includes('Duplicate entry'))
          callback(400, false, 'Duplicate entry')
        else
          callback(400, false, 'something wrong happened, please try again')
      })
  }

  delete(id, callback) {
    this.query(
      `SELECT * FROM Student WHERE ID = ?`,
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return this.query(
            'DELETE FROM Student WHERE ID = ?',
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

module.exports = Student