FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=build /app/build .
RUN npm install -g serve

CMD ["serve", "-s", ".", "-l", "80"]