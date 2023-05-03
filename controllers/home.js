const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({}).populate('userid');
    console.log(req.session); //para ve que que hay en el session object (cookie y usuario).
    res.render('index', {
        blogposts //key:value tienen = nombre, dejo uno blogposts:blogposts
    });
};