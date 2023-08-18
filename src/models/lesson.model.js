const formatDate = require('../utils/formatDate')
const Model = require('./model')

class Lesson extends Model {
  constructor() {
    super()
  }

  getAll(callback) {
    this.query(
      'SELECT * FROM Buoi_hoc ORDER BY Ngay',
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getByTeacher(id, callback) {
    this.query(
      `Select ID, CID, Ngay, tiet_bat_dau, note, TID, ID_bu, status
      From Buoi_hoc
      Where CID in (Select CID From Class Where TID = ${id})
      Order By Ngay`,
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getDay(day, callback) {
    this.query(
      `select * from Buoi_hoc b, Class s, Room r, User u
      where b.TID = u.ID and b.Ngay = '${day}' and b.CID = s.CID and r.RID = b.RID
      `,
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getHoc(id, callback) {
    this.query(
      `Select *
      From hoc
      Where BID = ${id}`,
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  getStudentPresent(callback) {
    this.query(
      `Select BID, Count(*) AS "Present"
      From hoc
      Where status = 'C' or status = 'T'
      Group By BID`,
    )
      .then(results => callback(results))
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get(id, callback) {
    this.query(
      'SELECT * FROM Buoi_hoc s WHERE s.ID = ?',
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

  update(id, newLesson, callback) {
    this.query(
      `SELECT * FROM Buoi_hoc WHERE ID = ?`,
      [id]
    )
      .then(results => {
        if (!id || results.length === 0)
          throw Error('invalid id')
        else {
          results[0].Ngay = formatDate(new Date(results[0].Ngay))
          console.log(results[0])
          let query = `UPDATE Buoi_hoc SET 
                    CID= '${newLesson.CID ? newLesson.CID : results[0].CID}',
                    RID= '${newLesson.RID ? newLesson.RID : results[0].RID}',
                    TID= '${newLesson.TID ? newLesson.TID : results[0].TID}',
                    MID= '${newLesson.MID ? newLesson.MID : results[0].MID}',
                    status= '${newLesson.status ? newLesson.status : results[0].status}',
                    tiet_bat_dau= ${newLesson.tiet_bat_dau ? newLesson.tiet_bat_dau : results[0].tiet_bat_dau},
                    so_tiet= ${newLesson.so_tiet ? newLesson.so_tiet : results[0].so_tiet},
                    note= '${newLesson.note ? newLesson.note : results[0].note}',
                    ID_bu= ${newLesson.ID_bu ? newLesson.ID_bu : results[0].ID_bu}
                    WHERE ID = ${id}`
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

  create(newLesson, callback) {
    let query = `INSERT INTO Buoi_hoc SET 
                    ID= '${newLesson.ID}',
                    CID= '${newLesson.CID ? newLesson.CID : 0}',
                    RID= '${newLesson.RID ? newLesson.RID : 0}',
                    TID= '${newLesson.TID ? newLesson.TID : 0}',
                    MID= '${newLesson.MID ? newLesson.MID : 0}',
                    Ngay= '${newLesson.Ngay ? newLesson.Ngay : ""}',
                    status= '${newLesson.status ? newLesson.status : 'N'}',
                    tiet_bat_dau= ${newLesson.tiet_bat_dau ? newLesson.tiet_bat_dau : 0},
                    so_tiet= ${newLesson.so_tiet ? newLesson.so_tiet : 0},
                    note= '${newLesson.note ? newLesson.note : ""}',
                    ID_bu= ${newLesson.ID_bu ? newLesson.ID_bu : null}
                    `
    console.log(query)
    this.query(query)
      .then(() => callback(200, true, 'Create success'))
      .catch((error) => {
        if (error.includes('Duplicate entry'))
          callback(400, false, 'Duplicate entry')
        else
          callback(400, false, 'something wrong happened, please try again')
      })
  }

  updateHoc(BID, SID, newHoc, callback) {
    this.query(
      `SELECT * FROM hoc WHERE BID = ${BID} and SID=${SID}`,
    )
      .then(results => {
        if (!BID || !SID || results.length === 0)
          throw Error('invalid id')
        else {
          this.query(`UPDATE hoc SET ? where BID = ${BID} and SID=${SID}`,
            {
              note: newHoc.note ? newHoc.note : "",
              status: newHoc.status ? newHoc.status : 'N'
            })
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

  createHoc(newHoc, callback) {
    this.query(`INSERT INTO hoc SET ?`,
      {
        BID: newHoc.BID,
        SID: newHoc.SID,
        note: newHoc.note,
        status: newHoc.status ? newHoc.status : 'N'
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
      `SELECT * FROM Buoi_hoc WHERE ID = ?`,
      [id]
    )
      .then(results => {
        if (results.length === 0)
          throw Error('invalid id')
        else
          return this.query(
            'DELETE FROM Buoi_hoc WHERE ID = ?',
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

module.exports = Lesson