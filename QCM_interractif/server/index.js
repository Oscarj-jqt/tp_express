const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/styles.css')));


//On affiche la page HTML
app.get('/question/1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'first.html'));
})

app.get('/question/1/2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'second.html'));
})

app.get('/question/1/2/3', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'third.html'));
})

app.get('/question/1/2/3/4', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'fourth.html'));
})

app.get('/question/1/2/3/4/5', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'fifth.html'));
})

//on crée les 5 routes post correspondant aux 5 questions

app.post('/question/1', (req, res) => {
    const answer = 4;
    //On récupère les informations saisies dans le formulaire par l'utilisateur.
    const data = {
        first: req.body.first
    };
    //On vérifie la validité de la réponse
    if(parseInt(data.first) !== answer) {
        res.send(`Mauvaise réponse. Revoyez votre table d'addition.`)
    }
    else {
        //Réecrire l'url ==> /question/1/2
        res.redirect('/question/1/2');
    }
})

app.post('/question/1/2', (req, res) => {
    const answer = 4;
    //On récupère les informations saisies dans le formulaire par l'utilisateur.
    const data = {
        second: req.body.second
    };
    //On vérifie la validité de la réponse
    if(parseInt(data.second) !== answer) {
        res.send(`Mauvaise réponse. Revoyez votre table de multiplication.`)
    }
    else {
        //Réecrire l'url ==> /question/1/2/3
        res.redirect('/question/1/2/3');
    }
})

app.post('/question/1/2/3', (req, res) => {
    const answer = 1;
    //On récupère les informations saisies dans le formulaire par l'utilisateur.
    const data = {
        third: req.body.third
    };
    //On vérifie la validité de la réponse
    if(parseInt(data.third) !== answer) {
        res.send(`Mauvaise réponse. Revoyez votre table de division.`)
    }
    else {
        //Réecrire l'url ==> /question/1/2/3/4/5
        res.redirect('/question/1/2/3/4');
    }
})

app.post('/question/1/2/3/4', (req, res) => {
    const answer = 4;
    //On récupère les informations saisies dans le formulaire par l'utilisateur.
    const data = {
        fourth: req.body.fourth
    };
    //On vérifie la validité de la réponse
    if(parseInt(data.fourth) !== answer) {
        res.send(`Mauvaise réponse. Revoyez votre table de puissance.`)
    }
    else {
        //Réecrire l'url ==> /question/1/2/3/4/5
        res.redirect('/question/1/2/3/4/5');
    }
})

app.post('/question/1/2/3/4/5', (req, res) => {
    const answer = 0;
    //On récupère les informations saisies dans le formulaire par l'utilisateur.
    const data = {
        fifth: req.body.fifth
    };
    //On vérifie la validité de la réponse
    if(parseInt(data.fifth) !== answer) {
        res.send(`Mauvaise réponse. Revoyez votre table de modulo.`)
    }
    else {
        res.send(`Bravo ! Vous avez gagné le quizz.`)
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Le serveur est lancé ici : http://localhost:${port}`);
});