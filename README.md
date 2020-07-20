# Lancer le projet ESMEWEB
## Overview du projet et de l'interface actuelle
![yolo](https://github.com/mindflix/esmeWeb/blob/feature/table/src/assets/images/review.png?raw=true)
![yolo2](https://github.com/mindflix/esmeWeb/blob/feature/table/src/assets/images/review2.png?raw=true)

## Étapes a suivre lors de l'initialisation
### Dans le répertoire racine, vous devez installez les dépendances de notre serveur :
`yarn install`

## Si vous ne pouvez pas effectuer cette commande :
Il se peut que vous n'ayez pas encore <code>yarn</code> d'installé sur votre machine. C'est un gestionnaire de paquets indispensable au bon fonctionnement de notre serveur (Node). Pour cela je vous invite à le télécharger et à l'installer selon votre machine. Vous devez impérativement installer NodeJs avant tout.
- Sous Linux
```
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install npm && sudo apt-get install yarn
```
- Sous Windows, rendez-vous sur le site https://nodejs.org/en/ et procédez à l'installation.
- Sous MacOS, installez d'abord brew, copier-coller dans le terminal :
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
Puis installez NodeJs :
```
brew update
brew install node
brew install npm
brew install yarn 
```

## Si vous avez des erreurs lors de l'installation :
- Vérifiez à ce que nodejs soit à jour
- Vérifiez à ce que yarn soit à jour et que vous n'avez pas utiliser npm (il ne doit pas y avoir de fichier package-lock.json, mais uniquement yarn.lock)

## Pour développer plus rapidement l'interface
Le serveur contient un système de hot-reload qui permet de recharger la page a chaque sauvegarde de fichier dans le projet, ce qui permet un cycle de développement plus rapide.

# Fonctionnement du projet
## Fonctionnement général
Ce projet est découpé en 2 modules :
- Un module API backend en Javascript, qui permet de communiquer avec la base de donnée Firebase.
- Un module interface frontend en Javascript avec React, qui communique avec ce serveur backend.

## Interface React
Un projet nodejs standard, fonctionnant via ReactJs. React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.

## Workflow recommandé
Lancer l'interface en dev via<code>yarn start ou npm start</code>.
Le serveur de dev est accessible sur [http://localhost:3000]

## Mise en production
Dans un premier temps, il faut lancer <code>yarn build</code> dans le répertoire frontend.
Le contenu du build du dossier frontend sera transféré au dossier backend, donc le module backend aura tout ce dont il a besoin pour lancer le site en prod.
