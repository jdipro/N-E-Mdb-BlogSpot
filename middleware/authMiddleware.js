//Este middleware lo creamos para atentificar al usuario. Si está en la base de datos, que pueda escribir un blog, si no está, que vuelva al homepage.

const User = require('../models/User')

module.exports=(req, res, next) => {
    User.findById(req.session.userId, (error,user) => {
        if(error || !user)
            return res.redirect('/')

            next()
    })
}