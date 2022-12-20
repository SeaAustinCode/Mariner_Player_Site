const Player = require("../model/player");

module.exports = {
    // CREATE 
    create: (req, res) => {
        console.log(req.body);
        Player.create(req.body)
            .then(newPlayer => {
                console.log("DB successfully created a new player");
                return res.json(newPlayer);
            })
            .catch(err => {
                console.log("DB ERROR creating a new player");
                return res.json(err);
            })
    },

    // READ ALL 
    findAll: (req, res) => {
        Player.find()
        .then( (players) => {
            return res.json(players);
        })
        .catch( err => res.json(err))
    },

    // READ ONE 
    findOne: (req, res) => {
        console.log(req.params);
        Player.findById(req.params.id) // id is a variable name which is being used in the api call on line 7 in playerRoutes.js
        .then(player => res.json(player))
        .catch(err => res.json(err))

    },

    // UPDATE 
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("UPDATE object:", req.body);
        Player.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true // this makes it so mongoose only returns the new updated object and it runs validators on it 
        })
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json(err))
    },

    // DELETE
    delete: (req, res) => {
        console.log(req.params.id);
        Player.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }

}