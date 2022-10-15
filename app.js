const express = require('express');
const path = require('path');
const fs = require('fs');
<<<<<<< HEAD

=======
const bodyparser = require('body-parser');
>>>>>>> 83cf12a (feat: added Contact page, refactor: updated pug files, style: changed the background of navbar)
const app = express();
const port = 8000;


<<<<<<< HEAD
=======
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/contact?authSource=admin', {useNewUrlParser: true});


/* define mongoose schema */

var contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String,
    desc:String
});

/*schema ko model mai compile kar rha */
var Contact = mongoose.model('Contact', contactSchema);


/* ab hum /contact pe post request krne ke liye ek method likhenge
post request ane se, sare post parameter ko lena hai aur usko ek database mai save krdena hai */






>>>>>>> 83cf12a (feat: added Contact page, refactor: updated pug files, style: changed the background of navbar)
/* EXPRESS SPECIFIC STUFF */

app.use('/static',express.static('static'));
/*for serving static files */
app.use(express.urlencoded({extended:false}));
/*to be able to use html forms */


/*PUG SPEFICIF STUFF */

app.set('view engine','pug');
/*set the template enginge as pug */
app.set('views', path.join(__dirname,'views'));
/*set the views directiory */


/*ENDPOINTS */

app.get('/', (req,res)=>{
    const params = {};
<<<<<<< HEAD
    res.status(200).render('index.pug', params);
});

=======
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req,res)=>{
    const params = {};
    res.status(200).render('contact.pug', params);
});

/*this is the post request that we were talking about */

/*jaise hi contact pe koi post request marega, */

app.post('/contact', (req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database");
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database");
    })
    // res.status(200).render('contact.pug');
});


>>>>>>> 83cf12a (feat: added Contact page, refactor: updated pug files, style: changed the background of navbar)
/*START THE SERVER*/
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})







