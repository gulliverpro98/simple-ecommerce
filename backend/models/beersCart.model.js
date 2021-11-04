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

const BeerCart = mongoose.model('BeerCart', beerSchema);

module.exports = BeerCart;
