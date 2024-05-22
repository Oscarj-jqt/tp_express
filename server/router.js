//Création du serveur express
const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
const path = require('path');
app.use(express.json());

//Utilisation de EJS
app.set('view engine', 'ejs');

//Création des 3 routes

//Route test page d'accueil
router.get('/', (req, res) => {
    res.send('Hello World !');
})

// Première route 

//Création du tableau
const cours = [
    {
        numeroducours: 1,
        titre: "Mathématiques appliquées",
        descriptif: "Application du savoir mathématique aux autres domaine numérique, statistiques...",
        enseignants: ['Laurent Ménard', 'Lucas Martin','Inès Roy','Enzo Lemoine']
    },
    {
        numeroducours: 2,
        titre: "Electromagnétisme",
        descriptif: "Bases de l'électromagnétisme, des calculs du champs statiques à la propagation des ondes électromagnétiques",
        enseignants: ['Jade Caron', 'Antoine Marchand','Victor Blanchard','Sarah Garnier']
    },
    {
        numeroducours: 3,
        titre: "Mécanique physique",
        descriptif: "Introduction au concepts de mécanique des fluides, matériaux et systèmes dynamiques",
        enseignants: ['Maxime Roux', 'Sophie Petit','Julie Simon','Théo Richard']
    }
]

router.get('/cours/:numeroducours/descr', (req, res) => {
    const coursNumero = req.params.numeroducours;
    res.send(`Vous avez demandé le cours numéro ${numeroducours}.`);
});



app.use('/', router);

app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}.`);
})


