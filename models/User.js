const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide username'], //required acepta un array y como 2do argumento un mensaje.
        unique: true
        },
    password: {
        type: String,
        required: [true, 'Please provide password'] //required acepta un array y como 2do argumento un mensaje.
        }
    });

UserSchema.plugin(uniqueValidator);  
  
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
});

//export model
const User = mongoose.model('User', UserSchema); //Se crea así un modelo o un molde, para la coleción User, no estamos creando la colección en sí acá.
module.exports = User;