const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorcontroller=require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes= require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const contactroutes= require('./Routes/contact');
const successroutes = require('./Routes/sucess')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactroutes);
app.use(successroutes);

app.use(errorcontroller.get404);

app.listen(3000);
