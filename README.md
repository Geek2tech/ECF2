
# ECF - Dynamiser vos sites web avec Javascript

>Création d’un petit jeu sur navigateur web à l’aide du DOM.

## règle du jeux

Le jeu comprend 2 joueurs sur un seul et même écran.
- Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
- À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite.
- Le résultat d’un lancer est ajouté au ROUND.
- Lors de son tour, le joueur peut décider à tout moment de:
  - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. 
  - Ce sera alors le tour de l’autre joueur.-Lancer le dé. 
- S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
- Le premier joueur qui atteint les 100 points sur global gagne le jeu.

## En front-desk (côté client)

- La possibilité de créer une nouvelle partie
- La possibilité de retenir le score courant
- La possibilité de lancer le dé
- La possibilité d’avoir 2 joueurs
## Bibliothèques et FrameWork utilisés

- Bootstrap
- Jquery

Le site est visible ici : https://geek2techdicegame.netlify.app
[![Netlify Status](https://api.netlify.com/api/v1/badges/2a3835ee-988a-4e2e-bd32-03c08f8de362/deploy-status)](https://app.netlify.com/sites/geek2techdicegame/deploys)
