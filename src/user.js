const mongoose = require('mongoose');

//On définit notre schéma pour la base de donnée (nom, prénom, mdp)
const userSchema = mongoose.Schema({
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
    },
    mdp_repeat: {
        type: String,
        required: true
    }
});

// On définit le modèle, la classe qui va intéragir avec la base de donnée
const model = mongoose.model("Utilisateur", userSchema);

module.exports = model;