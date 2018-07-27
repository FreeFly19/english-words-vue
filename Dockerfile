FROM node as builder

WORKDIR /tmp
COPY . /tmp
RUN npm install -g yarn
RUN yarn install \
  && yarn build

FROM nginx as http-server

COPY --from=builder /tmp/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
