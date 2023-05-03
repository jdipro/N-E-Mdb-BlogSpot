//CRUD Operations via Mongoose. Create - Read - Update - Delete.
//importamos mongoose.
const mongoose = require('mongoose');

//importa el modelo que recién creamos.
//BlogPost representa la colección BlogPost en nuestra db.

const BlogPost = require('./models/BlogPost');

//Si my_database db no existe, la creará por nosotros. nota: 127.0.0.1:27017 esto en lugar de localhost.

mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser:true});

//Para crear un nuevo doc BlogPost en nuesta db usaremos una función en nuestro model llamada create.

/** create me genera el contenido una y otra vez, por eso lo pongo gris para usar los otros operadores: Read, Update, Delete
 * 
 * 
BlogPost.create({
    //author: ObjectId,
    title:'The Mythbuster´s Guide to Saving Money on Energy Bills',
    body:'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.[...] You start spotting them everything at this time of year. They go like this:'
}, (error, blogpost) => {
    console.log(error,blogpost)
})
//blogpost es el la suvida a la db si está todo ok. Lo crea solo, por eso no hay otra referencia a 'blogpost' fuera este contexto.

 
BlogPost.create({
    //author: ObjectId,
    title: 'mmmmmmmmmmm',
    body: 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
}, (error, blogpost) => {
    console.log(error, blogpost)
})
*/


//create -> func. creadora de un nuevo documento. 1er Arg: ponemos los datos el BSON. 2ro func. callback.
//func. callback. Se la llama cuando create termina de ejecutarse. Si falla -> error, si éxito->crea blogpost.

//Acá pongo criterios de Búsqueda en MongoDB usando Mongoose (desde código). En Atlas se actualiza ¿sin salir del node test.js? . Ver favoritos jdipro.
//pág. final cap. 5
//Ej:
var id = "63927b35fd981583e0798c9c"; /**la var debe tener el id que quiero buscar */
BlogPost.findByIdAndDelete(
    id, (error, blogspot) => {
    console.log(error, blogspot)
})
/**Entonces: 
 * C (create) -> .create 
 * R (reading) -> .find + varios criterios de búsqueda
 * U (updating) -> .findByIdAndUpdate + varios criterios de búsqueda
 * D (deleting) -> .findByIdAndDelete
 * */