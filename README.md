# First steps

## 0. Install the dependencies

`npm i`

> Tested on NodeJs v17.1.0

## (Optional) Start a postgres docker container

`docker-compose up -d`

> Make a .env file based on the .env.example with you preferences
> Make a .env file based on the .env.example with you database settings inside prisma folder

## 1. Migration

`npx prisma migrate dev --name initial-migration --create-only`

## 2.Create database and tables

`npx prisma db push`

## 3.Generate prisma files

`npx prisma generate`

## 4. Seed data

`npm run seed`

## 5.Generate a JWT Secrete

`npm run generate`

## 6.Start the server (dev)

`npm run dev`

## 6.Start the server (prod)

`npm run start`

###

> Check insomnia file (`docs`) for the view API documentation
