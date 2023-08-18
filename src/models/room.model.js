const Model = require('./model')

class Room extends Model {
  constructor() {
    super()
  }

  getAll(callback) {
    this.query(
      'SELECT * FROM Room',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get(id, callback) {
    this.query(
      'SELECT * FROM Room s WHERE s.RID = ?',
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

  update(id, newRoom, callback) {
    this.query(
      `SELECT * FROM Room WHERE RID = ?`,
      [id]
    )
    .then(results => {
      if (!id || results.length === 0)
        throw Error('invalid id')
      else {
        let query = `UPDATE Room SET 
                    RID= '${newRoom.RID ? newRoom.RID : results.RID}',
                    Name= '${newRoom.Name ? newRoom.Name : results.Name}'
                    WHERE RID = ${id}`
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

  create(newRoom, callback) {
      this.query(
        'INSERT INTO Room SET ?',
        {
          RID: newRoom.RID,
          Name: newRoom.Name
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
      `SELECT * FROM Room WHERE RID = ?`,
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return this.query(
            'DELETE FROM Room WHERE RID = ?',
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

module.exports = Room