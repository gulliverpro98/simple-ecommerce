const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


const userSchema = new Schema({
    firstName:{type:String, required:true,trim:true},
    lastName:{type:String, required:true,trim:true},
    email:{type:String, required:true,trim:true, unique:true},
    username:{type:String, required:true,trim:true, unique:true},
    password:{type:String, required:true,trim:true},
    firstAddress:{type:String, required:true,trim:true},
    secondAddress:{type:String, trim:true},
    city:{type:String, required:true,trim:true},
    state:{type:String, required:true,trim:true},
    cap:{type:Number, required:true,trim:true},
},
{
    timestamps:true,
});


userSchema.pre('save', function(next){
    let user = this;
    //hash la password solo se è stato modificato o è nuovo
    if(!user.isModified('password')) return next();

    //genera salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);
        //hash la password originaria con il nostro nuovo salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);

            //override la password immessa dall'utente con quella hashed
            user.password = hash;
            //step successivo
            next();
        })
    })
});

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch=null) {
        if(err) return cb(err);
        cb(null,isMatch);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;