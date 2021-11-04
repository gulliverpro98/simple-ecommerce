const User = require('../models/users.model');
const jwt = require('jsonwebtoken');

exports.signup = (req,res) => {

    User.findOne({ email: req.body.email })
    .exec( (error, user) => {
        if(user) return res.status(400).json({
            message: 'User already registered'
        });

        const {
            firstName, 
            lastName, 
            email, 
            username, 
            password, 
            firstAddress, 
            secondAddress, 
            city, 
            state, 
            cap
        } = req.body;

        const _user = new User({
            firstName, 
            lastName, 
            email, 
            username, 
            password, 
            firstAddress, 
            secondAddress, 
            city, 
            state, 
            cap
        });
    
        _user.save( (error, data) => {
            if(error){
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            if(data) {
                return res.status(200).json({
                    user: data
                });
            }
        });
    });
}

exports.signin = (req,res) => {
    User.findOne({ username: req.body.username}, function(err,user){
        if(err) throw err;

        //test matching password
        user.comparePassword(req.body.password, function(err){
            if(err){
                return res.status(400).json({
                    message:'invalid Password'
                });
            };
            const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
            const {_id, firstName, lastName, email, username, password, firstAddress, secondAddress, city, state, cap} = user;
            res.status(200).json({
                token,
                user:{
                    _id, firstName, lastName, email, username, password, firstAddress, secondAddress, city, state, cap
                }
            });
        });
    });
};