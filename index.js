//Estas const las usamos para conectar los paquetes npm que vamos instalando o para cosas relacionadas a su funcionamiento.

const express = require('express')

//Cod. para MongoDB.
//Al principio en el node de la consola cmd me va a tirar que la app está rota, es normal hasta que esten los archivos Test.js y BlogPost.js completados. Por eso dejar el código de abajo acá.
const mongoose = require('mongoose') //conectamos el archivo index.js con mongodb. (1ro instalar el npm).
mongoose.connect('mongodb+srv://anga:mEEk24zHTY7STyCs@cluster0.cca4b97.mongodb.net/my_database', { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017/my_database', { useNewUrlParser: true }) //localhost=pq es nuestra pc y my_database=nombre de la base a la q nos conectamos. Si no existe, la crea.
// comando para verificar si el id es string: console.log(mongoose.Types.ObjectId.isValid('64259fd46e19b75b12fdca85'));
//Termina MongoDB.

const app = new express()
const ejs = require('ejs') // ejs -> templanting engines. Le decimos q todo lo terminado en .ejs sea renderizado con este paquete.


const fileUpload = require('express-fileupload');
const validateMiddleware = require('./middleware/validationMiddleware');
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
const flash = require('connect-flash');


app.set('view engine', 'ejs');



const bodyParser = require('body-parser'); //bodyParser (no poner ;)


//Aplicación de los middleware
app.use(fileUpload());
app.use(express.static('public'));
app.use(bodyParser.json()) //bodyParser (no poner ;)
app.use(bodyParser.urlencoded({ extended: true })) //bodyParser (no poner ;)


app.use(expressSession({
    secret:'keyboard cat'
    // ,
    // resave: false,
    // saveUninitialized: false
}));

global.loggedIn = null; //declaramos var global a loggedIn, será accesible por todos los archivos .ejs (navigation bar)

//Para ocultar el new user y log in a un usuario que ya está logeado:

app.use('*', (req, res, next) => { //el * (wildcard) nos permite especificar que es para todos los req que este middleware debe ejecutarse. Asignamos el loggedIn a req.session.userId.
    loggedIn = req.session.userId;
    next()
});

app.use(flash());

app.use('/posts/store', validateMiddleware) //debe estar después de app.use(fileUpload()) ya que requerimos del objeto req obtenido de la propiedad file.



// Puerto a conectar con la app con Heroku y localhost 4000

let port = process.env.PORT;
if(port == null || port == ""){
    port = 4000;
}
app.listen(port, () => {
    console.log('App listening...')
})

// Controllers 

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')


//All Routes: Request handler to call controller -> Codigo de aplicación de las constantes de arriba.

app.get('/posts/new', authMiddleware, newPostController) //agregamos el authMiddleware para que el usuario no registrado no pueda acceder a crear un post nuevo.
app.get('/',homeController )
app.get('/post/:id',getPostController)
app.post('/posts/store', authMiddleware, storePostController) //agregamos el authMiddleware para que el usuario no registrado no pueda postear.
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register',redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)


app.use((req, res) => res.render('notfound'));



