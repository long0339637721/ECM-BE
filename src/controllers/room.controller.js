const RoomModel = require('../models/room.model')
const RoomView = require('../views/room.view')

const roomModel = new RoomModel()
const roomView = new RoomView()

class RoomController {
    getAll(req, res) {
        roomModel.getAll((rooms) => {
            roomView.getAll(res, rooms)
        })
    }

    get(req, res) {
        let id = Number.parseInt(req.params.id)
        roomModel.get(id, (status, Room) => {
            roomView.get(res, status, Room)
        })
    }

    update(req, res) {
        let id = Number.parseInt(req.params.id)
        let editedRoom = req.body

        roomModel.update(id, editedRoom, (status, result, message) => {
            roomView.update(res, status, result, message)
        })
    }

    create(req, res) {
        let newRoom = req.body
        roomModel.create(newRoom, (status, result, message) => {
            roomView.create(res, status, result, message)
        })
    }

    delete(req, res) {
        let id = Number.parseInt(req.params.id)
        roomModel.delete(id, (status, result, message) => {
            roomView.delete(res, status, result, message)
        })
    }
}

module.exports = new RoomController