const Model = require('./model')

class Class extends Model {
  constructor() {
    super()
  }

  getAll(callback) {
    this.query(
      'SELECT * FROM Class',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getLesson(id, callback) {
    this.query(
      'Select * from Buoi_hoc Where CID = ? ORDER BY Ngay',
      [id]
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getClassInClass(id, callback) {
    this.query(
      'SELECT * FROM thuoc t, Student S WHERE t.CID = ? AND S.ID = t.SID',
      [id]
    )
      .then(results => {
        if (results.length === 0)
          callback(405, "size = 0")
        else
          callback(200, results)
      })
      .catch(() => callback(404, null))
  }

  get(id, callback) {
    this.query(
      'SELECT * FROM Class s WHERE s.CID = ?',
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

  update(id, newClass, callback) {
    this.query(
      `SELECT * FROM Class WHERE CID = ?`,
      [id]
    )
    .then(results => {
      if (!id || results.length === 0)
        throw Error('invalid id')
      else {
        let query = `UPDATE Class SET 
                    CID= '${newClass.CID ? newClass.CID : results.CID}',
                    So_buoi= ${newClass.So_buoi ? newClass.So_buoi : results.So_buoi},
                    NumStudent= ${newClass.NumStudent ? newClass.NumStudent : results.NumStudent},
                    DateS= '${newClass.DateS ? newClass.DateS : results.DateS}',
                    DateE= '${newClass.DateE ? newClass.DateE : results.DateE}',
                    CType= '${newClass.CType ? newClass.CType : results.CType}',
                    TID= '${newClass.TID ? newClass.TID : results.TID}',
                    Des= '${newClass.Des ? newClass.Des : results.Des}'
                    WHERE CID = ${id}`
        console.log(query)
        this.query(query)
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

  create(newClass, callback) {
      this.query(
        'INSERT INTO Class SET ?',
        {
          CID: newClass.CID,
          So_buoi: newClass.So_buoi,
          NumStudent: newClass.NumStudent,
          DateS: newClass.DateS,
          DateE: newClass.DateE,
          CType: newClass.CType,
          TID: newClass.TID,
          Des: newClass.Des
        }
      )
      .then(() => callback(200, true, 'Create success'))
      .catch((error) => {
        if (error.includes('Duplicate entry'))
          callback(400, false, 'Duplicate entry')
        else
          callback(400, false, 'something wrong happened, please try again')
      })
  }
  AddStudent(newClass, callback) {
      this.query(
        'INSERT INTO thuoc SET ?',
        {
          CID: newClass.CID,
          SID: newClass.SID
        }
      )
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
      `SELECT * FROM Class WHERE CID = ?`,
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return this.query(
            'DELETE FROM Class WHERE CID = ?',
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

module.exports = Class