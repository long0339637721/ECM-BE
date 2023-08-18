class RoomView {
  getAll(res, room) {
    if (room) {
      res.status(200).json({
        result: 'success',
        message: 'get all roomes',
        size: room.length,
        roomes: room
      })
    }
    else {
      res.status(400).json({
        result: 'fail',
        message: 'wrong',
        size: null,
        roomes: null
      })
    }
  }

  get(res, status, Room) {
    if (Room) {
      res.status(status).json({
        result: 'success',
        message: 'get Room by id',
        Room: Room
      })
    }
    else {
      res.status(status).json({
        result: 'fail',
        message: 'id not exist, please check again',
      })
    }
  }

  update(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }

  create(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message,
    })
  }

  delete(res, status, result, message) {
    res.status(status).json({
      result: result ? 'success' : 'fail',
      message
    })
  }
}

module.exports = RoomView