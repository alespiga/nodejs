// create docker image
docker build . -t spigarm/fastify-app

// run docker image
docker run -p 8080:3000 spigarm/fastify-app
