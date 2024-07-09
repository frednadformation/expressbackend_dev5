const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    modele : { type : String},
    marque : { type : String},
    description : { type : String },
})

module.exports = mongoose.model('Car', carSchema);