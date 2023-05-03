//BlogPost.js es el primer modelo de nuestra coleccion.
//MongoDB es una base de datos de backEnd NoSQL (no relacional. No tiene filas y columnas).
//En MongoDb, la info se relaciona en forma de 'colecciones' y 'documentos'.
//'Colecciones' -> representan una entidad única en nuestra app: en un e-comerce -> necesitamos entidades como categorías: usuarios, productos, etc. C/u será una colección única.
//'Documentos' -> Están contenidos por las 'Colecciones': son instancias de la entidad que contienen los variados campos relevantes para representarlo:

//Ej. el 'documento' de un producto para el e-comerce contendrá nombre, imagen y precio. Cada campo es un par clave:valor. Se ven como un JSON o mejor un BSON ya que son JSON Binarios.

//Data Base
//**Product Collection_1
//****Product document_A
//******{price:26, title: 'Learning Node', description: 'gggg'};
//****Product document_B
//******{price:26, title: 'Learning Node', description: 'gggg'};
//---------
//**Product Collection_2
//****Product document_A
//******{price:26, title: 'Learning Node', description: 'gggg'};
//****Product document_B
//******{price:26, title: 'Learning Node', description: 'gggg'};


//Aquí pondremos los "models" que son objetos que **representan las colecciones** en nuestra base de datos.
//La interface "schema" definen los "models". "Schema" representa como se verá la "colección". C/ "documento" en la "colección" tendrá sus campos especificados en un "schema".

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId, //especificamos el tipo que el valor se supone será válido como un object id de mongo.
        ref: 'User', //especificamos User para hacer referenciaa la colección homónima (User.js).
        required: true
    },
    datePosted:{ /*can declare property type with an object like this because we need 'default' */
        type: Date,
        default: new Date()
    },
    image: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema); //Se crea así un modelo o un molde, para la coleción BlogSpot, no estamos creando la colección en sí acá.
module.exports = BlogPost;

//Nota, solo se puede exportar una variable, nosotros nos llevamos mongoose.
//Nota 2: exportS


// En caso de asegurarnos que el ID podría no ser un Object id, pongo lo de abajo. Igualmente, esto no arregló el problema. Así que seguro es otra cosa.
//   _id: {
//   type: Schema.Types.ObjectId,
//   required: true
//   },
