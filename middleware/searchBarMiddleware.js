
/*
const searchBar = require('../models/BlogPost');

module.exports = (req, res) => {
    let queryKey = req.query.key;

        searchBar.find({   //"$or" sirve para buscar en múltiples campos.
        "$or": [
            { title: { $regex: key } },
            { body: { $regex: key } },
            { datePosted: { $regex: key } }
        ]}, 
        function (err, data) {
            if (err){
                return res.render('searchResult', {data: null});
            }
            res.render('searchResult', {data: data});
            

        }

    );
    console.log(queryKey);
}
*/
