# Fetching the minified node image on apline linux
FROM node:slim

# Setting up the work directory
WORKDIR /test-flang

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
ENTRYPOINT ["npm"]
CMD [ "run", "dev" ]

# Exposing server port
EXPOSE 5000