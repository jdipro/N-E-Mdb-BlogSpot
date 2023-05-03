module.exports = (req, res) =>{
    var username = ""
    var password = ""
    const data = req.flash('data')[0];
    
    if(typeof data != "undefined"){
        username = data.username
        password = data.password
    }

    res.render('register',{ // devolvemos el error desde session con req.session.val.. y se lo pasamos a register.ejs
        //errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
         // con este cambio el error se borra para el usuario al refrescar la web.
        username: username,
        password: password
    })
};