const express = require('express');
const router = express.Router();
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/user');
const {signup, signin} = require('../controller/user');


router.post('/signin', validateSigninRequest, isRequestValidated, signin);

router.post('/signup', validateSignupRequest, isRequestValidated, signup);




module.exports = router;