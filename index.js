// Importer le module Express
const express = require('express');

// Créer une application Express
const app = express();

// Définir un port d'écoute pour le serveur
const port = 3000;

// Définir une route simple
app.get('/', (req, res) => {
  res.send('Bonjour, le serveur fonctionne');
});
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page À propos');
  });
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
// Route pour "/about"

  
