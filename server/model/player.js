const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be a minimum of 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be a minimum of 2 characters"]
    },
    nickname: {
        type: String,
        minlength: [2, "{PATH} must be a minimum of 2 characters"]
    },
    birthDate: {
        type: Date,
        required: [true, "{PATH} must be present"]
    },
    imageURL: {
        type: String,
        required: [true, "{PATH} must be present"]
    },
    position: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [1, "{PATH} must be a minimum of 2 characters"]

    },
    twitterHandle: {
        type: String,
        default: "Player does not have an official Twitter",
    },
    instagramHandle: {
        type: String,
        default: "Player does not have an official Twitter",

    },
    baseballReference: {
        type: String,
        required: [true, "{PATH} must be linked to a player"],

    },
    awards: {
        type: String,
        default: "Player has not earned any awards yet",

    },
    infield: {
        type: Boolean,
        required: [true, "{PATH} must be linked to a player"],
    },

    outfield: {
        type: Boolean,
        required: [true, "{PATH} must be linked to a player"],
    },

    startingPitcher: {
        type: Boolean,
        required: [true, "{PATH} must be linked to a player"],
    },

    reliefPitcher: {
        type: Boolean,
        required: [true, "{PATH} must be linked to a player"],
    },

    playerOfficialSite: {
        type: String,
        default: "Player does not have an official website",
    },
}, {timestamps:true})

//create the schema and export it 
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;