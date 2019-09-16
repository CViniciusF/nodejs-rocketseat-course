This is a Node.js server example.
This server was made following rocketseat course, and uses a docker container with MongoDB for database

Techs used:
- MongoDB for database

- Docker for container (MongoDB container)
    docker pull mongo
    docker run --name mongodb -p 27017:27017 -d mongo

- Express for routes and server

- Mongoose for ORM

- require-dir to require whole directories
- mongoose-paginate for pagination
- cors for cross origin requests