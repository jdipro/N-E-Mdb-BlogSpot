module.exports = (req, res) => {
    //Para que un usuario no cree un post sin estar logeado -sí o sí- ponemos:
    if(req.session.userId){
        return res.render("create",{
            createPost: true //así aplicamos el editor wysiwyg sólo en create.ejs
        });
    }
    res.redirect('/auth/login')
}

//Aquí agregamos los post nuevos para ser renderizados por el motor EJS. ver q hay una barra en el get.