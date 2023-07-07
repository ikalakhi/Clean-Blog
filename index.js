const edge = require('edge.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressEdge = require('express-edge');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');
const fileUpload =  require('express-fileupload');
const expressSession = require('express-session');

const auth = require('./middleware/auth');
const storePost = require('./middleware/storePost');
const loginController = require('./controllers/login');
const logoutController = require('./controllers/logout');
const getPostcontroller = require ('./controllers/getPost');
const homePageController = require('./controllers/homePage');
const loginUserController = require('./controllers/loginUser');
const userStoreController = require('./controllers/storeUser');
const storePostcontroller = require('./controllers/storePost');
const createUserController = require('./controllers/createUser');
const createPostController = require('./controllers/createPost');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');

const app = new express();

mongoose.connect('<your mongodb url>');

app.use(connectFlash());

const sessionStore = new connectMongo({
  mongooseConnection: mongoose.connection,
  mongoUrl: '<your mongodb url>'
});

app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(expressEdge)
app.use(fileUpload())
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('*', (req, res, next) => {
  edge.global('auth', req.session.userId)
  next()
})

async function delay() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('wating : ', new Promise(resolve => setTimeout(resolve, 1000)))
}
delay();

app.set('views', `${__dirname}/views`)

app.get('/', homePageController);
app.get('/post/new', auth, createPostController);
app.get('/post/:id', getPostcontroller);
app.get('/auth/register', redirectIfAuthenticated, createUserController);
app.get('/auth/login', redirectIfAuthenticated, loginController);
app.get('/auth/logout', auth, logoutController);
app.get('/about', (req, res) => {
    res.render('about')
})

app.post('/post/store', auth, storePost, storePostcontroller);
app.post('/users/register', redirectIfAuthenticated, userStoreController);
app.post('/users/login', redirectIfAuthenticated, loginUserController)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})
