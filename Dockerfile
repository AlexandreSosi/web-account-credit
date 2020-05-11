FROM node:10
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Adicionando `/app/node_modules/.bin` para o $PATH
ADD . .
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN npm install
# start app
CMD ["npm", "start"]
