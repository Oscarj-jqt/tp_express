//Configuration de l'app et importations des modules nécessaires bdd Mongo

const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Express")


//On vérifie la connexion
connect.then(() => {
    console.log("Connexion à la base de donnée réussie")
})
.catch(() => {
    console.log("Erreur dans la connexion à la base de donnée.")
})
//On définit notre schéma pour la base de donnée (nom, prénom, mdp)
const userSchema = new mongoose.Schema({
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true
    }
});

// On définit le modèle, la classe qui va intéragir avec la base de donnée
//Avec comme paramètres : le nom de collection et le schéma créé avant
const collection = new mongoose.model("users", userSchema);

module.exports = collection;