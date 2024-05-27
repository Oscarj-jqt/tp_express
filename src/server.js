//Configuration de l'app et importations des modules nécessaires serveur express
const mongoose = require('mongoose');
const collection = require('./user');
const express = require('express');
const path = require('path');
const app = express();

//Conversion des données en json
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..','templates', 'register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'templates', 'login.html'));
})

//Route gérant l'inscription 
app.post('/register', async (req,res) => {
    //D'abord, on récupère les informations saisies dans le corps de la requête(form)
    const data = {
        prenom: req.body.prenom,
        nom: req.body.nom,
        mdp: req.body.mdp,
        mdp_repeat: req.body.mdp_repeat
    };
    //On vérifie si ce nom est déjà utilisé
    const existingUser = await collection.findOne({prenom: data.prenom, nom: data.nom});
    if(existingUser) {
        res.send(`Cet utilisateur existe déjà. Utilisez un nom différent.`)
    } else {
        //Puis on les insère dans la base de donnée
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        // const savedUser = await userdata.save();
        res.status(200).send(`Bonjour ${data.prenom}${data.nom}, ton compte est bien créé.`);
    }
});

// Route pour la connexion
app.post('/login', async (req, res) => {
    //Bloc try catch tentative de connexion
    try {
        const check = await collection.findOne({ prenom: req.body.prenom, nom: req.body.nom});
        //On vérifie l'existence de cet utilisateur
        if (!check) {
            res.send("Cet utilisateur n'existe pas. Essayez de nouveau.");
        } else {
            res.status(200).send(`Bienvenue ${req.body.prenom}!`);
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la tentive de connexion à ce compte.');
    }
});

//Après la mise en place des tests unitaires, les routes fonctionnent correctement.


const port = 3000;
app.listen(port, () => {
    console.log(`Le serveur est lancé ici : http://localhost:${port}`);
});