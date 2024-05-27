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
// router.get('/', (req, res) => {
//     res.send('Hello World !');
// })

// Première route 

//Création du tableau
const cours = [
    {
        numeroducours: 1,
        titre: "Mathématiques appliquées",
        description: "Application du savoir mathématique aux autres domaine numérique, statistiques...",
        enseignants: ['Laurent Ménard', 'Lucas Martin','Inès Roy','Enzo Lemoine']
    },
    {
        numeroducours: 2,
        titre: "Electromagnétisme",
        description: "Bases de l'électromagnétisme, des calculs du champs statiques à la propagation des ondes électromagnétiques",
        enseignants: ['Jade Caron', 'Antoine Marchand','Victor Blanchard','Sarah Garnier']
    },
    {
        numeroducours: 3,
        titre: "Mécanique physique",
        description: "Introduction au concepts de mécanique des fluides, matériaux et systèmes dynamiques",
        enseignants: ['Maxime Roux', 'Sophie Petit','Julie Simon','Théo Richard']
    }
]


app.get('/cours/:numeroducours/descr', (req, res) => {
    const coursNumero = parseInt(req.params.numeroducours, 10);
    const enseignement = cours.find(c => c.numeroducours === coursNumero);
    // S'il parvient à récupérer le cours, il renvoie :
    if (enseignement) {
        res.render('cours', {
            titre: enseignement.titre,
            description: enseignement.description,
            enseignants: enseignement.enseignants,
        });
        // En cas d'échec
    } else {
        res.status(404).send('Cours introuvable');
    }
});

app.use('/', router);

app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}.`);
})


