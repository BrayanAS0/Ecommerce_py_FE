FROM node:22-slim 

WORKDIR /app

COPY package*.json ./

#Si se corre en windows , se debe correr ya que el docker esta en linux y causa conflitos
RUN rm -f package-lock.json \
    && npm cache clean --force \
    && npm install

COPY . .

EXPOSE 5173

CMD ["npm", "start"]