FROM caddy:alpine

COPY Caddyfile /etc/caddy

WORKDIR /app

COPY . .
