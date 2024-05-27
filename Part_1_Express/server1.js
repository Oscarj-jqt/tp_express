//Création du serveur express
const express = require('express');
const app = express();
const port = 3000;

//Création des 3 routes


// Première route 
app.get('/about', (req, res) => {
    //Cas pour requête GET vers '/about'
    //Elle renvoie la date actuelle et un message.
    console.log('Requête reçue à ' + Date.now());
    //elle fonctionne mais pas la date
    console.log('Envoie des infos')
    res.send(`Affichage de l'about`);
})

//Autres routes lorsque ce n'est pas GET vers '/about'
app.all('/', (req, res) => {
    console.log('abort');
    res.send('Erreur !');
})

app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}.`);
})