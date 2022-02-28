# Random Quiz Generator App

## Setup

---

1. Clone repo with `git clone https://github.com/mata0050/randomQuizGenerator.git`
2. Setup Env variables

> JWT_SECRET: l have slacked the code

> PG_ELEPHANT_URL: l have slacked the code. This string will allow us to connect to an Elephant Instance l created, so have are all connected to the same database at all times.

> NODE_ENV = development

> PORT = 3001

3. Run `npm install` in the root folder.
4. Change Directory to client `cd client`.
5. In the Client folder run `npm install`. In the client folder is where the frontend is.
6. Change Directory to root `cd ..`.
7. To run both the server and client at the same time `npm run dev`. This will run the server and client continuously and when you save you any changes, it will restart both the server and client with the new changes.

> If you want to run the server by itself `npm run server` and to run the client by itself `npm run client`

### Dependencies Backend

- Bcryptjs
- Dotenv
- Express
- Express-async-handler
- Gravatar (user profile icons)
- JsonWebToken
- PG
- Concurrently
- Nodemon

### Wire-Frame

![wireframe-FP (1)](https://user-images.githubusercontent.com/91488574/153897181-31f8f7c9-dcf4-4c19-bd98-fcfb8d67e627.png)
![wireframe-FP (2)](https://user-images.githubusercontent.com/91488574/153897194-98eeba8c-74b4-4948-88a7-8652882ac8dd.png)
![wireframe-FP (3)](https://user-images.githubusercontent.com/91488574/153897205-aeb2889e-aa86-4dcd-8358-a1c728e4d6f4.png)
![wireframe-FP](https://user-images.githubusercontent.com/91488574/153897339-280ba06f-e596-4b2c-8aff-3934169330e4.png)
=======

## ERD - Diagram

---

![Screen Shot 2022-02-11 at 4 28 38 PM](https://user-images.githubusercontent.com/58061791/153672804-f175ebf4-8c42-4217-b30b-55ff30707089.png)
