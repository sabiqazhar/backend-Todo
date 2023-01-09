
# REST API Todo list

this is fullstack project, for the FE you can check link this bellow

[frontend](https://github.com/sabiqazhar/frontend-Todo)

In this backend project, we use tech stacks:
- NodeJS
- TypeScript
- Express JS
- Mongoose
- MongoDB Atlas
- Eslint-TypeScript
- Prettier


## Before running

- Setup the database local, you can read stuff for install mongo in [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (for windows, mac and linux) and [here](https://www.linode.com/docs/guides/set-up-mongodb-on-docker/) (for docker)

- Setup database on atlas mongoo, you can read stuff [here](https://docs.rackspace.com/blog/creating-and-connecting-to-a-database-in-mongodb-atlas/)

- if you choose database at atlas mongoo, edit nodemon.json adjust your mongoo atlas account


## Run Locally

Clone the project

```bash
  git clone https://github.com/sabiqazhar/backend-Todo.git
```

Go to the project directory

```bash
  cd backend-Todo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

- ✔️PASSED // GET all todo
- ✔️PASSED // GET todo by id
- ✔️PASSED // POST data todo
- ✔️PASSED // PUT data todo
- ✔️PASSED // DELETE data todo