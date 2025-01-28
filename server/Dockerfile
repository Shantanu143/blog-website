FROM node

COPY .gitignore .gitignore
COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm i 

COPY server.js server.jss


ENTRYPOINT [ "node","server.js" ]