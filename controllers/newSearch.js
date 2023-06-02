//const BlogPost = require('../models/BlogPost');

/*
module.exports = async (req, res) => {
let data = req.files.key;

   await BlogPost.find(
        {   //"$or" sirve para buscar en múltiples campos.
            "$or": [
                { title: { $regex: req.params.key } },
                { body: { $regex: req.params.key } },
                { datePosted: { $regex: req.params.key } }
            ]
        }
    )


}


let data = BlogPost.find(
    {
        "$or": [
            { title: { $regex: req.params.key } },
            { body: { $regex: req.params.key } },
            { datePosted: { $regex: req.params.key } }
        ]
    }
)

*/
