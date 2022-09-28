// create docker image
docker build . -t spigarm/fastify-app

// run docker image
docker run -p 8080:3000 spigarm/fastify-app

// with -d container start detached : launch container in background and dont see in console
docker run -d -p 8080:3000 spigarm/fastify-app

// to stop
docker ps
docker stop c235c741b0cf
