// importing the controller
const Player = require('../controllers/playerController')

module.exports = (app) => {
    app.get("/api/players", Player.findAll)
    app.post("/api/players", Player.create)
    app.get("/api/players/:id", Player.findOne) // :id is a variable name which was declared in the function on line 30 of playerController.js
    app.put("api/players/:id", Player.update)
    app.delete("api/players/:id", Player.delete)
}

