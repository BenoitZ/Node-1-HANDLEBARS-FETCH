V8 moteur construit par google Js

node --version

sur la doc -> console est un module qui permet de gérer la console
            console.log();
           -> fileSystem (fs) est un module qui permet d'intéragire avec les dossiers systeme

Le fichier principal peut s'appeler main ou index ou app...

Pour utiliser un module il faut toujours faire un require au debut du fichier

const fs = require("fs");  -> on importe le module fs et on le stocke dans la const fs pour pouvoir utiliser toutes les methodes(beaucoup voir la doc) que fs contient 
2 fonctions nous intéresse dans fs 
-readFileSync pour lire le contenu d'un fichier
-writeFileSync pour créer un fichier avec du contenu

Bien utiliser la doc node pour voir les paramétres

node index.js  pour éxecuter dans la console
cls pour néttoyer la console 
npm = node package manager   pour importer de spackage/modules consuent par d'autres personnes

npm init  pour inititialiser un projet Node  / imdispensable ppur importer des modules de l'exterieur   -> yes yes yes yes yes 
-> un fichier âckage.json est créé

npm i mathjs -> un fichier package-lock.json est créé -> pas touche
            -> un dossier node modules est créé -> mathjs à besoin d'autres modules pour fonctionner. il y a donc plusieurs modules qui ont étaient importé dans node module -> on les retourve dans package.json et package-lock aussi

npm uninstall mathjs -> pour désinstaller le module
             




// 2 PREMIER SCRIPT
const fs = require("fs");      // require pour importer

fs.writeFileSync("text.txt", "Mon premier fichier"); 
                     //on chope la methode writeFileSync dans l'objet fs et on passe en paramétre le nom du fichier et son contenu
fs.writeFileSync("text.txt", "Mon deuxieme fichier");
console.log("mon fichier a bien été crée");

const fileContent = fs.readFileSync("text.txt"); 
                     //pour lire le fichier indiqué dans les param
console.log(fileContent); 
                     //renvoi un buffer <Buffer 4d 6f 6e 20 64 65 75 78 69 65 6d 65 20 66 69 63 68 69 65 72> parce que lon n'a pas précisé l'encoding que l'on veut utiliser utf8

const fileContent = fs.readFileSync("text.txt", "utf8"); 
                     //ok renvoi Mon deuxieme fichier
console.log(fileContent);



// 3 LES MODULES
const f = require("./function");  
                     //on importe le fichier function.js qui contient la methode multiply
console.log(f.multiply(5,10));   
                     //on appel la medthode mulyiply dans l'objet f 
                     et on lui passe les 2 param x et y 
console.log(f.divide(10,2));

                     //OU
const {multiply, divide} = require("./function");  
                     //destructuring, on destructure l'objet function et on récupére juste les methodes qui npus intéresse
console.log(multiply(5,10));    
                     //pas la peine de préciser quel objet on vise vu que l'on a dejà chopé la methode
console.log(divide(10,2));

const{ chain } = require("mathjs");         
                     //on importe les fonctions qui nous intéresse dans mathjs
console.log(chaine(3).add(4).multiply(2).done()); 
                     //node index.js dans console -> 14  grace à la fonction chain de mathjs



// 4 MODULE GLOBALE ET DEPENDANCE DEV -> voir read me
npm i chalk@4.1.2 -D 
                     // pour charger une version spécifique d'un module @4.1.2
                     // le -D indique que l'on va utiliser le module uniquement pour le développement (devDependencices)
npm i nodemon -g 
                     // module installé sur l'ordinateur de facon globale pour ne 
                     // pas avoir à le résinstaller une prochaine fois   
                     // nodemon index.js    et nodemon relancera l'application a chaque 
                     // modiffication du fichier index.js 



// 5 RECUPERER L'INPUT DE L'UTILISATEUR
                     // 1-Par le terminal 
                     // Facon fournis par Node process (parser fournis par Node) bof bof
const {argv} = require("process");  
                     // on récupére la methode argv du module process fournis par niode (donc pas la peine de faire un npm i)
console.log(argv);                                    
                     // argv récupére les éléments que l'on tape dans le terminal (node function.js Alex Jean) et les affiche sous forme de tableau

                     // 2-Par le terminal -npm i yargs minimist   
                     // Deux parser pour choper les infos passées par l'utilisateur
const argv = require("minimist")(process.argv);  
                     //dans ce cas argv stocke les éléments rentrés dans le term dans un tableau qui est lui dans un objet
console.log(argv);  
                     // dans la console -> node index.js Alex Jean 
                     // affiche -> {_: ['/usr/local/bin/node','/Users/benoit/Desktop/NodeTutoDebutant/index.js','Alex','Jean']}

console.log(argv.n); 
                     // dans la console -> node index.js -n Zellal -a Benoit 
console.log(argv.a); 
                     // affiche -> Zellal Benoit

console.log(argv.name); 
                     // Pour une option longue : dans la console -> node index.js --name="Zellal 
                     // Benoit" -a 30 
console.log(argv.a); 
                     // affiche -> Zellal Benoit 30
                     // 3-Par le terminal -npm i yargs minimist   -> plus complet -
                     // voir la doc et revoir bien comme il faut


 
// 6 JSON Javascript Object Notation  manipuler et créer

const{readFileSync, writeFileSync} = require("fs");

const jsonToObject = JSON.parse(readFileSync('./data.json', 'utf-8'));  
                     // fonction parse de l'objet JSON qui transforme du JSON en objet JavaScript
                     // read filesync pour lire un fichier (chemin, encodage pour la lecture du 
                     // fichier json)
console.log(jasonToObject);  
                     //-> {name : "Alex", age : 30, legal : true} -> objet js
console.log(jasonToObject.name); 
                     //-> ALex
console.log(jasonToObject.legal); 
                     //->true

!! 
const {name, age, legal} = JSON.parse(readFileSync('./data.json', 'utf-8'));
console.log(name); 
console.log(age); 
                     // Avec le destructuring, pas le peine de préciser l'obvjet car on a déja chopé
                     // uniquement les éléments name et age dans le destructuring (donc pas légal)
                     // créer un fichier JSON
const myData = {
        name: "Benoit",
        age: 29,
        legal: false
}
const objectToJson = JSON.stringify(myData);  
                     //transforme l'objet js "myData" en Json
console.log(objectToJson);
writeFileSync('./myData.json', objectToJson); 
                     //o a créé le fichier Json myData.json avec objectToJson dedans
                     //clique droit dans le fichier json -> format document pour afficher le document en beau format json


const myData = JSON.parse(readFileSync('myData.json', 'utf-8'));
myData.name = "Fred"; 
                     //on récupére le fichier .json -> on le transofme en objet 
console.log(myData); 
                     // on modifie le nom -> et on retransforle l'objet en .json
const objectToJson = JSON.stringify(myData);
console.log(objectToJson);
writeFileSync('myData.json', objectToJson); 
                     //->node index.js dans la console -> ok 
                     //dans myData.json fred a remplacé Benoit -> clique droit -> document format 



// 7 LE DEBUGGER NODE

                     // Le petit debuggueur -> console log
                     // Avec le debugueur Node -> on place le mot "debugger" ou on veut le point d'arret du debuggueur
                     // -> dans la console -> node inspect index.js -> on lance
                     // on lance dans chrome -> chrome://inspect -> on clique sur inspect en bas de la page sur chrome
                     // -> on se retroue sur un espece d'IDE DevTools qui appartient à Node
                     // !! les modifs faites sur le débuggeur Node sur Chrome se retrouve sur VSCode aprés un refresh



// 8 LA DOC ET L'ASYNCHRONE
                     // nodejs.org -> doc -> version -> options -> view on single page -> recherche
                     // decdocs.io

                     // Asynchrone -> Permet d'executer une tache pendant que le reste du programme s'execute
console.log("1");
setTimeout(() => {
   console.log("2");
}, 3000);
console.log("3");    
                     // Exemple d'asynchrone -> envoie 1 3 et 2 au bout de 3 sec
                     // D'autres méthodes : cancelled timers, set intervall...
                     // async await



// 9 REQUETES HTTP
                     // API application programing interface
                     // -> permet de fournir des services à un programme                     
                     // Pour utiliser une API on a besoin d'un end point -> lien qui permet de 
                     // récupérer un lien vers une image par exemple

const request = require("postman-request");

                     // request("url", option, callback)
request("https://dog.ceo/api/breads/image/random", (error, response, body) => {
console.log(error);  
                     // -> null, log response -> toutes les options de reponse, log body -> renvoi le corps de l'API en JSON
})

request("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
        const dogPicture = JSON.parse(body); 
                     // -> on transforme le JSON de dog.ceo en objet JS
        console.log(dogPicture); 
                     //{
                     // message: 'https://images.dog.ceo/breeds/terrier-bedlington/n02093647_201.jpg',
                     // status: 'success'
                     // }
        console.log(dogPicture.message); 
                     // on peut du coup récupérer les éléments de l'objets JS
        console.log(dogPicture.status);

                     // Avec la destructuration
        const {message, status} = JSON.parse(body); 
                     // -> on transforme le JSON de dog.ceo en objet JS et on récupére juste les éléments qui nous interesse
        console.log(message); 
                     // on utilise les elements du detsructuring
        console.log(status);
})

request("https://api.thecatapi.com/v1/images/search", (error, response, body) => {
        const catPicture = JSON.parse(body); 
                     // -> on transforme le JSON de dog.ceo en objet JS
        console.log(catPicture); 
                     //undifined parce que l'objet est dans un array
        console.log(catPicture[0].id); 
                     //donc il faut préciser quel élément du tableau avec de récupérer l'élement qui nous interesse
})



// 10 CHANGER VERSION NODE, API FETCH
nvm install -> pour switcher un changement sur les differentes versions de node en un claquement de doigt

fetch('https://dog.ceo/api/breeds/image/random')
.then(res => { res.json() })                       
                        // paramétres : promise, fonction callback -- permet d'attacher une resolution ou un rejet d'une promise - res pour response
                        // premier then avec res.json pour récupérer la promise (sous forme d'objet JS) --  pending = promise en cours
.then(data => console.log(data.message));          
                        // deuxieme then pour gérer la promise - ici on recupére le message de l'objet JS 

fetch('https://api.thecatapi.com/v1/images/search')
.then(res => { res.json() })                  
.then(data => console.log(data[0].url));           
                        // différence parce que l'objet JS est dans un array



// 11 REQUETE HTTP API METEO FETCH

const parameters = {
        access_key: "5988e33db047c82c9cb3b267ccfd4209",
        query: "Paris",
        units: "m"
}                       //f pour fareineight dans units
                        // On entre les différents paramétres dans un objet appelé parameters


fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&units=${parameters.units}&query=${parameters.query}`)
.then(res => res.json())                       
// .then(data => console.log(data));      
                        //on a dans la data 3 "gros" objet : request, location et current     
.then(data => {
        const {request, location, current } = data;   
                        //on recupére les 3 avec un destructuring
        console.log(location.region);                  
                        //on affiche la region dans l'objet location
        console.log(`Le nom de la ville est ${location.name} et il y fait actuellement ${current.temperature}°`); 
});



// 12 GESTION DES ERREURS
fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&units=${parameters.units}&query=${parameters.query}`)
.then(res => res.json())                       
.then(data => {
        if (data.success === false) {
                console.log(`Error${data.error.code}:${data.error.info}`);
                
        } else {
                const {request, location, current } = data;   
                        //on recupére les 3 avec un destructuring
                console.log(location.region);                 
                        //on affiche la region dans l'objet location
                console.log(`Le nom de la ville est ${location.name} et il y fait actuellement ${current.temperature}°`);          
        }
});

const weather = (location, unit, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=5988e33db047c82c9cb3b267ccfd4209&query=${encodeURIComponent(Location)}&units=${units}`;
                                //encodeURIcomponent -> fonction qui encode des caractéres spéciaux au cas où
                                //on passe les paramétres à l'url de l'API
                                //fonction callback -> pour pouvoir renvoyer des informations dans une fonction 
                fetch(url)
                .then(res => res.json())                       
                .then(data => {
                        if (data.success === false) {
                                callback(`Impossible de renvoyer vos infos. Error ${data.error.code}:${data.error.info} `)

                        } else {
                                const {location, current } = data;   //on recupére les 3 avec un destructuring
                                console.log(location.region);                  //on affiche la region dans l'objet location
                                callback(undefined, `Le nom de la ville est ${location.name} et il y fait actuellement ${current.temperature}°`);          
                        }
                });
        }

weather("Nice", "m", (err, data)=>{
        console.log('Erreur :', err);
        console.log('Data :', data);
});
        weather("Paris", "m", (err, data)=>{
        console.log('Erreur :', err);
        console.log('Data :', data);
});
                //detecte le comportement de l'erreur ou de la Data
                //soit Erreur : undifined
                //      Data : Le nom de la ville est .....                        
                //soit Erreur : bla bla .....
                //      Data : undifined



// 13 EXPRESS
                // Adonis => express avancé avec Typescript

const express = require("express");
const app = express();   //fonction pour créer une application
const port = 3000;

                // Les deux fonctions importantes de express : get et listen
app.get("/", (req, res) => {
    res.send("Racine"); })           
                // get permet de récupérer ce qu'il y a dans les paramétres (chemin/path/page, fonction callback)              
                // res.send pour envoyer des infos au chemin indiqué "/"
                    
app.get("/about", (req, res) => { 
                //une autre page avec du code html
    res.send(`<h1>Hello about</h1>`);           
}) 

app.get("/testJson", (req, res) => {            
                //une autre page pour envoyer des données JS via le navigateur sur une page
    res.send({
        name: "Alex",
        age: 30
    });           
}) 

app.listen(port, () => {      
                //paramaétre (port et fonctionc allback)         
                // Pour pouvoir lancé et se connecter sur notre serveur avec le navigateur
console.log(`App listening on port ${port} !`); })         
                //Et pour se connécter -> node index.js -> dans navigateur : http://localhost:3000/



// 14 ASSOCIER LES STATIC ET NODE APP.USE
                //On crée 2 dossier : public et views!
                
                [Alt text](https://file%2B.vscode-resource.vscode-cdn.net/var/folders/lb/9m3f339x2hn0h93n5hpjz4j40000gn/T/TemporaryItems/NSIRD_screencaptureui_NTxRDB/Capture%20d%E2%80%99e%CC%81cran%202023-06-18%20a%CC%80%2016.33.54.png?version%3D1687098836832)

                //un schéma d'application basique!
                
                [Alt text](https://file%2B.vscode-resource.vscode-cdn.net/var/folders/lb/9m3f339x2hn0h93n5hpjz4j40000gn/T/TemporaryItems/NSIRD_screencaptureui_G5ZsCA/Capture%20d%E2%80%99e%CC%81cran%202023-06-18%20a%CC%80%2016.40.01.png?version%3D1687099218601)

const path = require("path");
const express = require("express");
const app = express();  
const port = 3000;

// console.log(__dirname);   
                //Pour indiquer le chemin du dossier ou l'on est actuellement

app.use(express.static(path.join(__dirname, "views"))); 
                //associe app.js(dirname) et views(donc html pour l'instant) ensuite html fait le lien avec css
app.use(express.static(path.join(__dirname, "public"))); 
                //associe app.js(dirname) et public(donc css et img pour l'instant)
                méme si c'est linké dans html il faut node puisse avoir accés au css et img

                //App.use Pour indiquer un fichier à utiliser. Dans ce cas ce sera pour utiliser les fichiers static

                // path.join pour faire le lien entre plusieurs fichier                            
                //On a changé le main dans package.json de index.js à app.js
                //Si on veut appeler app.js (maintenant qu'il est indiqué dans le main/package.json) on peut soit l'appeler dans le terminal soit node app.js soit node .    

app.listen(port, () => {   
console.log(`App listening on port ${port} !`);
                    })  



// 15 LES TEMPLATES VIEW ENGINE
                // extensions (EJS PUG...) pour remplacer html et pouvoir passer du JS dans html qui n'est plus html et rendre un site dinamyc
                // express handlebar ici (a peu prés pareil que EJS) 
                npm i express-handlebars

                // !!! dans ce cas on enléve le app.use qui sera remplacé par app.get et un render 
                // on change index.html par home.handlebars
                // on crée un dossier layouts dans viex et on fichier main.handlebars dans layouts
                //main avec structure html mais avec {{{ body }}} dans le corps html
                // dans home on pourra direct (sans meta et tout ca) coder le body qui sera ensuite implémenté dans le main.handlebars dans {{{ body }}} c'est un composant

const path = require("path");
const express = require("express");
const app = express();  
const port = 3000;
const {engine} = require('express-handlebars');

app.engine('handlebars', engine());  
                // on chope l'extension handlebars et la fonction engine( qu'on à pris dans destructuring)
app.set('view engine', 'handlebars'); 
                // on mets en place l'option viex engine en précisant que c'est bien handlebars que l'on va utiliser
app.set('views', path.join(__dirname, "views")); 
                // on indique ou sont les views avec le nom et le path.join pour associer les 2 fichiers

app.use(express.static(path.join(__dirname, "public"))); 


                // la requete à executer une fois tous les parametres mient en place
app.get("/", (req, res) => {
    res.render('home', {
        title: "home",
    });
} )

app.get("/about", (req, res) => {
    res.render('about', {
        title: "about",   
                //on veut passer un nouveau titre pour la page
    });
} )

app.listen(port, () => {   
console.log(`App listening on port ${port} !`)});
         

// 16 LES PARTIALS (composants)
                // A savoir que express handlebars detecte automatiquement le dossier views SI IL EST BIEN A LA RACINE. 
                On enlevera donc le app.set ('views', path.join(_dirname, "views")) car il ne sert plus à rien
                les dossiers views/layout et views/partials sont des architectures prédéfinies par express handlebars
                Donc pas besoin de config pour ces dossiers si ils sont bien placés
                // On crée footer et header.handlebars dans partials
                // Pour intégrer un partials dans le main (dans le layout) on mets 
                {{> footer}}  > pour indiquer c'est un partial et vu que le fichier est à la racine on mets juste footer

                // on importe les cdn css et js et js popper et... de boostrap
                // on mets en place une navbar boostrap dansheader.handlebars

                Pour résumé :
                app.js
                -On importe les différents modules
                -On mets en place handlebars
                -On mets en plus des middleware vers / et about avec des props dans le render
                -On mets en place le listen pour établir la connéction au serveur
                -app.js détecte automatiquement le dossier views si il est à la racine
                -app.js détécte automatiquement les dossier layout et partials si ils sont dans le dossier views

                layouts/main
                -Base HTML/handlebars
                -On importe les CDN, les partials et le body sur cette page

                views/about et home
                -correspond à la page /about et /
                - On mets en place de l'html dedans, ce sera le body de la page about ou de la page home 
                - On récupére les props passés dans app.js {{ name }} qui correspondent aux middlewares de chaques pages



// 17 GERER LES ERREURS 404 ET 500
                //404 LA PAGE N'A PAS ÉTÉ TROUVÉ

app.use((req,res, next) => {
    res.status(404).send("Page not found, error 404 !");
})        

                //ou avec le render et on crée une page 404 dans handlebars
app.use((req,res, next) => {
    res.status(404).render("404", {
        title: '404'
    });
}) 

                //* renvoi sur n'importe quelles pages autre que about ou / 
                // c'est pourquoi il faut toujours le mettre en dernier
app.get("*", (req, res) => {  
    res.render('404', {       
        title: "404"
    });
})
                //ou (plus précis) 
                // vise une erreur dans une page 
app.get("about/*", (req, res) => {  
    res.render('404-about', {     
        title: "404-about"
    });
})



// 18 RECUPERER LES ELEMENTS D'UNE QUERY
                //on crée un dossier utils avec un fichier weather.js dedans ou l'on mets notre fetch weather de la lecon 12 et on va se concentrer sur le app.js pour manipuler les querys
                //On connecte express à l'API weather 

app.get("/", (req, res) => {
    // console.log(req.query);
                // propriété query : récupére tout ce qui se trouve aprés le point d'interrogation dans l'url
                //httm:localhost:3000/?location=Strasbourg&unit+m  -> {location : 'Strasbourg,' unit : 'm'}
    const { location, unit } = req.query; 
                // on destructure l'objet et on ne récupére que location et unit -> Strasbourg, m
    if (!location){
        return res.send("Une erreur s'est produite, nous ne trouvons pas la location")
    } else if (!unit) {    
        return res.send("Une erreur s'est produite, nous ne trouvons pas l'unité")
    }           // on gére les erreurs

    console.log(req.query);

    weather(location, unit, (err, data) => {
        console.log('Err :', err);
        console.log('Data :', data);
    })          // on appel la methode weather et on log l'erreur et la data
})




