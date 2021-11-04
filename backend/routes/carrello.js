const express = require('express');
const router = express.Router();
const BeerCart = require('../models/beersCart.model');

router.get('/', (req,res) => {
    BeerCart.find()
        .then(beersCart => res.json(beersCart))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post( (req,res) => {

    const name = req.body.name;
    const description = req.body.description;
    const alcohol = req.body.alcohol;
    const img = req.body.img;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newBeer = new BeerCart({name, img, description, alcohol, price, quantity});

    newBeer.save()
        .then(() => res.json("Beer added to cart!"))
        .catch(err => res.status(400).json('Error' + err));
});


module.exports = router;