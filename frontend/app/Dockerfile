FROM node:16.18.0 as build
WORKDIR /dist/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest as final
COPY --from=build /dist/src/app/dist/app /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80