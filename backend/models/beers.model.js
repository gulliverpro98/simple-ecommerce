const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: {type:String, required:true},
    description: {type:String},
    alcohol: {type:Number, required:true},
    img:{type:String, required:true},
    price:{type:Number, required:true},
    quantity:{type:Number}
},
{
    timestamps:true,
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
