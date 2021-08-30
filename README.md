# wdwtb
Wordpress Docker Webpack Timber Bootstrap

## Before starting
Make sure you have insalled these dependencies

- [Docker](https://docs.docker.com/).
- [NodeJs](https://nodejs.org/it/download/).
- [NPM](https://www.npmjs.com/get-npm).
- [Composer](https://getcomposer.org/download/).

### Set Up environment variables

Rename `.env.example` to `.env` and update the variables in it. 

## Install dependencies
```
yarn install
composer install
```

## Develop

Start docker -- by starting the docker, it will automatically install wordpress based on your details in `.env` and activate plugins in composer.json and activate the development theme. So you'll be ready to code with no extra configuration. 
```
docker-compose up -d
```

Start webpack watcher -- you'll see your change in the browser in real time when you make some change in `frontend/js/app.js` and `frontend/scss/*` files.
```
yarn watch
```

## Build

Thils willl build your production files.
```
yarn prod
```




