const path = require("path");
const express = require("express");
const { weather } = require('./utils/weather')
const app = express();  
const port = 3000;
const {engine} = require('express-handlebars');

app.engine('handlebars', engine());  // on chope l'extension handlebars et la fonction engine( qu'on à pris dans destructuring)
app.set('view engine', 'handlebars'); // on mets en place l'option viex engine en précisant que c'est bien handlebars que l'on va utiliser
// app.set('views', path.join(__dirname, "views")); // on indique ou sont les views avec le nom et le path.join pour associer les 2 fichiers

app.use(express.static(path.join(__dirname, "public"))); 

app.get("/", (req, res) => {
    res.render('home');
    });

app.get("/weather", (req, res) => {
    const { location } = req.query; 
    weather(location, unit ="m", (err, data) => {
        if(err)res.send(`Une erreur est survenue. ${err}`)
        res.send(data);
    });      // on appel la methode weather et on log l'erreur soit on log la data
});

app.get("/about", (req, res) => {
    res.render('about', {
        title: "about",   //on veut passer un nouveau titre pour la page
        name: "Alex"
    });
})

app.get("*", (req, res) => {  //* renvoi sur n'importe quelles pages autre que about ou / 
    res.render('404', {       // c'est pourquoi il faut toujours le mettre en dernier
        title: "404"
    });
})
            //ou (plus précis) 
app.get("about/*", (req, res) => {  // vise une erreur dans une page 
    res.render('404-about', {     
        title: "404-about"
    });
})





app.listen(port, () => {   
console.log(`App listening on port ${port} !`);
})  