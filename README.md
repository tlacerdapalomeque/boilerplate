## Available Scripts

Please start the project with:

### `npm run dev`

Runs the app in the development mode `npm start` and `npm run server`.

#### Other scripts:

`npm start`

runs the development server

`npm run server`

Runs json-server-auth on port 4000: db.json

### Docker: Linux approach

As described in the requirements, the app will grow. As a suggestion I added docker for the development team to containerize the app and having a unified development machine in terms of os, dependencies, etc.
Node Version and NPM can also be locked and use nvm (version manager) in the development machines, but other technologies might be incorporated, so using a development container would be the best way to go to isolate the solution under several container with different micro services.

-> Under json-server-auth folder (json server):
`sudo docker pull node:13.12.0-alpine`
`sudo docker build -t jsonserver`
`sudo docker run --rm -it --name jsonserver-container -p 4000:4000 jsonserver`

-> Under boilerplate folder (dev server):
`sudo docker build -t boilerplate:dev .`
`sudo docker run \`
`-it \`
`--rm \`
`-v ${PWD}:/app \`
`-v /app/node_modules \`
`-p 3001:3000 \`
`-e CHOKIDAR_USEPOLLING=true \`
`boilerplate:dev`
