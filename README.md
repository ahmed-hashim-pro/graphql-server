# 🚀 Welcome to GraphQL APi example project!

This project has been created as an example of GraphQl Api with Apollo Server.

You can use docker as a container or self-host at Aws Api Gateway.



### start the live server
```
npm run dev
```

###  build and start your application
```
npm run start
```
### build docker image
```
docker build . -t ha-graph
```

### start docker image
```
docker run -p 4000:4000 -d ha-graph
```

# Docker Compose GraphQL APi and MongoDB example


## Run the System
We can easily run the whole with only a single command:
```bash
docker-compose up
```

Docker will pull the MongoDB and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker-compose up -d
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:
```bash
docker-compose down --rmi all
```

