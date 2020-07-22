# EsmeWeb
## Introduction
Le projet EsmeWeb a pour but d'etre un site vitrine pour l'association Sudrihack.  
Ce site contiendra plusieurs modules propre a Sudrihack :
- Une vitrine des projets de l'association
- Un classement dynamique des membres de l'association, conformement au module RPG de l'association

A l'avenir, tous les projets de la Sudrihack auront un impact sur le projet EsmeWeb.

## Specifications techniques

La partie frontend (tout ce qui apparait sur le navigateur) utilise 2 principales technologies :
- React, un framework de templating en Javacript
- Tailwind, un outil assistant au CSS

En ce qui concerne la partie backend, tout est gere par Firebase, dans le cloud.  
Des connaissance en HTML, CSS et Javacript permettent de facilement se familiariser avec le projet.

## Pre-requis du projet
### NodeJS
Afin de pouvoir faire fonctionner le projet localement, vous aurez besoin d'avoir NodeJS a la version 14.5.0 ou plus, 
voici comment voir la version actuelle de node sur son ordinateur, cette commande fonctionne pour tous les systemes 
d'exploitation :
```console 
user@pc:~ $ node -v
v14.5.0 
```

Si vous n'avez pas NodeJS, ou la bonne version, voici [un lien de telechargement](https://nodejs.org/en/download/) pour telecharger Node avec la bonne version.

### Yarn
Contrairement a NodeJS, Yarn n'est pas necessaire au fonctionnement du projet, neanmoins,
nous vous recommandont fortement de l'utiliser, cet outil est beaucoup plus rapide que son
equivalent installe par defaut, NPM.

Vous trouverez un guide pour installer Yarn [ici](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjO9MPW6-HqAhXPyIUKHUDZDz0QFjAAegQIARAC&url=https%3A%2F%2Fyarnpkg.com%2Flang%2Fen%2Fdocs%2Finstall%2F&usg=AOvVaw2NZ6b4ay9pnQPf3rzVCezK).

### Git
Comme Yarn, Git n'est pas necessaire, mais fortement recommande pour pouvoir facilement mettre le projet a jour
ou envoyer le code que vous avez produit dans le depot.

Voici un guide pour l'installer [ici](https://github.com/git-guides/install-git).


## Installer le projet localement
### Telecharger le projet via Git :
```console
user@pc:~/Dev/MesProjets $ git clone https://github.com/mindflix/esmeWeb.git
```
### Installer les dependances
#### avec Yarn
```console
user@pc:~/Dev/MesProjets $ cd esmeWeb
user@pc:~/Dev/MesProjets/esmeWeb yarn install
```

#### Avec NPM
```console
user@pc:~/Dev/MesProjets $ cd esmeWeb
user@pc:~/Dev/MesProjets/esmeWeb npm install
```
En cas d'erreur, referrez vous a cette documentation, si votre erreur n'y figure pas,
redigez une issue [ici](https://github.com/mindflix/esmeWeb/issues/new).

## Lancer le serveur de developpement
#### avec Yarn
```console
user@pc:~/Dev/MesProjets/esmeWeb yarn start
```

#### Avec NPM
```console
user@pc:~/Dev/MesProjets/esmeWeb npm run start
```
En cas d'erreur, referrez vous a cette documentation, si votre erreur n'y figure pas,
redigez une issue [ici](https://github.com/mindflix/esmeWeb/issues/new).

Le serveur sera generalement accessible sur votre navigateur a cette adresse :
```
http://localhost:3000
```

Nous utilisons Webpack en tant que bundler pour notre projet, ce que cela veux dire est que
lorsque vous sauvegarderez un fichier du projet pendant que le serveur est en route, votre page web sur votre
navigateur sera automatiquement rafraichie.

Ca ne fait gagner que quelque secondes, mais sur une journee ou cette etape est repetee plusieurs centaines de fois, le gain de temps
est remarquable.


## Mise en production
La mise en production consiste a mettre le build de production sur le serveur de production.
Le build de production est genere de maniere a augmenter les performances du site au cout du temps de generation. 
#### avec Yarn
```console
user@pc:~/Dev/MesProjets/esmeWeb yarn build
```

#### Avec NPM
```console
user@pc:~/Dev/MesProjets/esmeWeb npm run build
```
En cas d'erreur, referrez vous a cette documentation, si votre erreur n'y figure pas,
redigez une issue [ici](https://github.com/mindflix/esmeWeb/issues/new).

## Fonctionnement général
Ce projet est découpé en 2 modules :
- Un module contenant des API en Javascript, permettant de communiquer avec la base de donnée Firebase.
- Un module interface frontend en Javascript avec React, qui utilise les API pour les populer avec des donnees.

## Arborescence
A venir...

## Interface React
Un projet nodejs standard, fonctionnant via ReactJs. React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.

## Screenshots du projet
### Module classement
![yolo](https://github.com/mindflix/esmeWeb/blob/feature/table/src/assets/images/review.png?raw=true)
### Page d'accueil
![yolo2](https://github.com/mindflix/esmeWeb/blob/feature/table/src/assets/images/review2.png?raw=true)
