const User = require('../models/User.js');
const path = require('path');

module.exports = (req,res) => {
    User.create(req.body, (error,user) => {
       // console.log(Object.keys(error.errors)) -> me avisa por consola q un campo: user o pass está mal, incompleto o inexistente. También si un usuario está duplicado. Si fallan ambos sólo avisa 1 error.
        if(error){
           const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
           req.flash('validationErrors', validationErrors)
           req.flash('data', req.body)
            return res.redirect('/auth/register')     //todos los request tendrán su req.flash() function que puede ser usada para flashear mensajes.
       } 
        res.redirect('/')
    })
};