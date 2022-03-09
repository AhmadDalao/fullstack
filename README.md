# Project Overview

<p align="center">
	<a href="ToDoApp/README.md">Frontend</a>
  &nbsp;&nbsp;&nbsp;
	<a href="backend/README.md">Backend</a>
  &nbsp;&nbsp;&nbsp;
</p>


### clone the project 

Start by cloning this project on your workstation.

```bash
git clone https://github.com/AhmadDalao/fullstack.git
```

# Client installation

### navigate to client folder called " ToDoApp "

```bash
CD ToDoApp
```

### Install the ionic CLI globally:


```bash
npm install -g ionic
```


### The next thing will be to install all the dependencies of the project.

```bash
$ npm install
```

### Running the client app

```bash

ionic serve

```

# backend installation

### navigate to server folder called " backend "

```bash
CD backend
```

### Installation

The next thing will be to install all the dependencies of the project.

```bash
 npm install
```

### Running the app

```bash
# development
 npm run start

# watch mode
 npm run start:dev

 # production mode
 npm run start:prod
```

### Get the docker image
```bash
docker pull ahmaddalao/backend-repo:backend-dockerized
```

###  Run the docker image

```bash
docker run -p 8080:3000 backend-dockerized 
```
