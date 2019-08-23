# RegrEtsy Reviews

> Implemented a reviews microservice for an Etsy item detail mock. Packaged with other microservices to approximate a functional item detail page.

![Reviews Preview](https://i.imgur.com/6G8Z3X6.png)

## Related Projects

  - https://github.com/regretsy-hratx42/header-and-search
  - https://github.com/regretsy-hratx42/image-carousel
  - https://github.com/regretsy-hratx42/cnebs-reviews
  - https://github.com/regretsy-hratx42/item-details
  
  A preview of the microservices stitched together:
  
  ![stitched preview](https://media.giphy.com/media/KGviP0UztcjVYbi8vX/giphy.gif)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions:
> fork to your github
> npm install
> start server with following: npm run server-dev
> Navigate to site by going to localhost:3000 (port subject to change)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

This microservice uses React, Node, MySQL, knex.js, and Express for the majority of its functinoality.

It was constructed to use 100 unique seller records, with 100 reviews for each seller.

The microservices communicate via message bus across the reverse proxy; data renders relative to the product id.

React-Bootstrap is the front-end framework used across microservices in this project.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

