//Función para manejar la request POST (está en el libro pero POST no está en el codigo nuevo en create.ejs, hay q ponerlo)

const BlogPost = require('../models/BlogPost');
const path = require('path');

    module.exports = (req, res) => {
    //model create a new doc with browser data
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'..', 'public/img', image.name),
        async (error) => {
            await BlogPost.create({
                ...req.body,
                image: '/img/' + image.name,
                userid: req.session.userId //se cargará con el Id del usuario logeado en loginUser.js cuanod el usuario se logeé.
            })
            res.redirect('/');
        })
    }