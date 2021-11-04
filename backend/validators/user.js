const { check, validationResult } = require('express-validator');
/*firstName, 
            lastName, 
            email, 
            username, 
            password, 
            firstAddress, 
            secondAddress, 
            city, 
            state, 
            cap */
exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .notEmpty()
    .withMessage('Valid Email is required'),
    check('username')
    .notEmpty()
    .withMessage('username is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
    check('city')
    .notEmpty()
    .withMessage('city is required'),
    check('state')
    .notEmpty()
    .withMessage('state is required'),
    check('cap')
    .notEmpty()
    .withMessage('zip is required'),
    check('firstAddress')
    .notEmpty()
    .withMessage('firstAddress is required')   
];

exports.validateSigninRequest = [
    check('username')
    .notEmpty()
    .withMessage('username is required'),
    // check('password')
    // .isLength({ max: 6 })
    // .withMessage('Password must be at least 6 characters long')
    
];

exports.isRequestValidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0 ) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}