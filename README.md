# Application météo

Cette application permet d'obtenir les informations météorologiques d'une ville en entrant le nom de la ville dans un fichier .env.local  

L'objectif de ce projet était de récupérer un projet existant qui fournissait les informations météorologiques d'une ville en utilisant l'API de https://openweathermap.org/, et de changer d'API pour utiliser celle de https://open-meteo.com/.  

Je suis partit de ce projet : https://github.com/madzadev/weather-app  

Voici le lien de ma maquette : https://www.figma.com/design/LUBenpUD4TMxOaWEVmxOLa/Application-m%C3%A9t%C3%A9o?node-id=0-1&t=P020aPxFlCB3dULs-1  

## Fonctionnalités  

1. Entrer le nom de n'importe quelle ville 

2. Température et température ressentie  

3. Précipitations, humidité et vitesse du vent  

4. Date et heure  

5. Icone définissant le temps actuel  

6. Rafraichissement des données toutes les heures  

## Installation  

- Renommer le fichier `.env.example` en `.env.local`  
- Entrez le nom de la ville dans le fichier `.env.local`
- Faites la commande `npm install` puis lancez le projet avec la commande `npm run dev`  

-> Il se peut que le projet ne se lance pas si vous n'avez pas la bonne version de Node.js, mais nvm permet de changer de version rapidement, vous pouvez passer à la version 14 avec les commandes suivantes :
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
- `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`  
- `nvm install 14`
- `npm run dev`  

Le projet est lancé, vous pouvez consulter les informations météo de la ville indiquée dans le fichier `.env.local`  

-> Si vous souhaitez changer de ville, modifier le nom de la ville dans le fichier `.env.local`, puis relancez le projet : 
- CTRL + C pour mettre fin à la commande précédente  
- De nouveau `npm run dev` pour relancer le projet  

Le projet doit être relancé pour prendre en compte les modifications faites dans le fichier `.env.local`  
