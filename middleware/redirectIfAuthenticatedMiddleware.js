module.exports = (req, res, next) =>{
    if(req.session.userId){
        return res.redirect('/') //si el usuario está logeado, redirigir a la homepage.
    }
    next()
}