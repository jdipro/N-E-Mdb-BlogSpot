module.exports = (req, res) =>{
    req.session.destroy(() =>{ //con esto destruimos todos los datos de sesión incluida la user id, y nos redirige al home page.
        res.redirect('/')
    })
}