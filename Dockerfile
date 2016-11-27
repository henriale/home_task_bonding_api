# load node image
FROM node:alpine

MAINTAINER alexandreh.araujo@gmail.com

# install sails globally
RUN npm -g install sails

# create workdir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy app into workdir
COPY . /usr/src/app
RUN npm install

# set app env var
ENV NODE_ENV=development

# run sails
CMD ["sails", "lift"]

EXPOSE 80
