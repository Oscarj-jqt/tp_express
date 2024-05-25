const mongoose = require('mongoose');
const User = require('./user');
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');


// Middleware pour parser les données des formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..','templates', 'register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'templates', 'login.html'));
})

//Route gérant l'inscription 
app.post('/register', async (req,res) => {
    const newUser = new User({
        prenom: req.body.prenom,
        nom: req.body.nom,
        mdp: req.body.mdp,
        mdp_repeat: req.body.mdp_repeat
    });

    //On enregistre ces données dans la bdd

    try {
        const savedUser = await newUser.save();
        res.status(200).send(`Bonjour ${prenom}${nom}, ton compte est bien créé.`);
        console.log('Les données du nouvel utilisateur ont été enregistrées avec succès.')
    } catch (error) {
        res.status(500).send(`Erreur`)
        console.log(`L'enregistrement des données du nouvel utilisateur ont échoués.`)
    }
});

// Route pour la connexion
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ prenom: req.body.prenom, nom: req.body.nom, mdp: req.body.mdp });
        if (!user) {
            res.status(400).send('Nom d\'utilisateur ou mot de passe incorrect.');
        } else {
            res.status(200).send('Connexion réussie.');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la connexion.');
    }
});

//Fonction asynchrone permettant la connexion à la base de donnée
//Puis on peut créer des utilisateurs
(async ()=>{
    try {
        await mongoose.connect("mongodb://localhost/testMongoose");
        console.log("Connexion réussie avec la base de donnée");

        // // // const result = await User.insertMany([
        // // //     {
        // // //         prenom: "Mon prenom",
        // // //         nom: "Mon nom",
        // // //         mdp: 1234,
        // // //         mdp_repeat: 1234
        // // //     },
        // // //     {
        // // //         prenom: "Mon prenom 2",
        // // //         nom: "Mon nom 2",
        // // //         mdp: 1234,
        // // //         mdp_repeat: 1234
        // // //     }
        // // ])
    } catch (error) {
        console.log(error.message);
    }
})();


app.listen(port, () => {
    console.log(`Le serveur est lancé ici : http://localhost:${port}`);
});