const express = require('express');
const router = express.Router();
const Beer = require('../models/beers.model');

router.get('/', (req,res) => {
    Beer.find()
        .then(beers => res.json(beers))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post( (req,res) => {

    const name = req.body.name;
    const description = req.body.description;
    const alcohol = req.body.alcohol;
    const img = req.body.img;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newBeer = new Beer({name, img, description, alcohol, price, quantity});

    newBeer.save()
        .then(() => res.json("Beer added!"))
        .catch(err => res.status(400).json('Error' + err));
});


module.exports = router;