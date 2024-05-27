//Création du serveur express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.json());


//Création des 3 routes


// Première route 
app.get('/home', (req, res) => {
    
    res.send(`Affichage de la page d'accueil`);
})

app.get('/private', (req, res) => {
    res.send('Affichage des informations privées');
})

app.get('/private/mine', (req, res) => {
    console.log('abort');
    res.send('Affichage de mes informations privées ');
    console.log('f');
})

app.get('/pictures', (req, res) => {
    console.log('Affichage des photos');
    //Envoie du fichier à téléchargé
    res.sendFile(path.join(__dirname,'../assets/pictures'));
})

//Gestion des routes non admises
app.use((req, res) => {
    var error = new Error('Introuvable');
    if (error) {
        res.send(`Votre demande n'a pas été admise.`);
    }
    
})
//Fonction middleware pour modifier le code en console

const request = function (req, res, next) {
    console.log('Requête reçue')
    next()
}
app.use(request)

app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}.`);
})