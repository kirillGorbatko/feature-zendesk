FROM node:16.13.0-alpine as storage

ENV NODE_ENV production

WORKDIR /storage
COPY package.json .
COPY yarn.lock .
RUN yarn install --check-files --cache-folder .ycache && rm -rf .ycache

FROM node:16.13.0-alpine

WORKDIR /app
COPY --from=storage /storage/node_modules node_modules

ARG CACHE_BUST
ENV BUILD_NUMBER=$BUILD_NUMBER

COPY dist/apps/website/next.config.js .
COPY dist/apps/website/package.json .
COPY dist/apps/website/public public/
COPY dist/apps/website/.next/ .next/
RUN sed -i 's/\.\/with-nx.js/@nrwl\/next\/plugins\/with-nx/g' next.config.js

CMD [ "yarn", "next", "start", "-p", "4200" ]
