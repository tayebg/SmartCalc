const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000; // Vous pouvez choisir un autre port

// Chemin vers vos fichiers de certificat SSL
// Assurez-vous que ces chemins sont corrects par rapport à l'emplacement de server.js
const privateKey = fs.readFileSync(path.join(__dirname, "localhost.key"), "utf8");
const certificate = fs.readFileSync(path.join(__dirname, "localhost.crt"), "utf8");

const credentials = { key: privateKey, cert: certificate };

// Servir les fichiers statiques de votre PWA
// Le dossier 'ilytay' est le dossier racine de votre site web
app.use(express.static(__dirname));

// Redirection HTTP vers HTTPS (facultatif mais recommandé)
app.use((req, res, next) => {
  if (req.protocol === "http") {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

// Création du serveur HTTPS
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Serveur HTTPS en cours d'exécution sur https://localhost:${port}`);
  console.log("Assurez-vous que votre certificat SSL est approuvé par votre système.");
});

// Pour le développement, vous pouvez aussi avoir un serveur HTTP pour les tests initiaux
// app.listen(80, () => {
//   console.log("Serveur HTTP en cours d'exécution sur http://localhost");
// });

