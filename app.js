const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const errorController = require('./controllers/error')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))


const shopRoutes = require('./routes/shop')
const accountRoutes = require('./routes/account')
const authRoutes = require('./routes/auth')

app.use(shopRoutes)
app.use(accountRoutes)
app.use(authRoutes)

app.use(errorController.getErrorPage)

app.listen(8000)