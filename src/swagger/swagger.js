const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MyBooks API',
    description: 'a simple api to store my books and comments about it',
  },
  // TO SEARCH: CONFIG API KEY
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-bear-token',
      description: 'authentication Token',
    },
  },
  definitions: {
    book: {
      title: 'MEDITAÇÃO',
      author: 'ALEXANDRE DE SANTI',
      genre: 'MINDFULLNESS',
      pags: 100,
      images: 'no available',
    },
    books: [
      {
        title: 'Madame Bovary',
        author: 'Gustavo Flaubert',
        genre: 'Classics',
        pags: 360,
        images: 'no available',
      },
    ],
  },
  host: 'localhost:3001',
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFile = ['/Users/maycon.huanca/Documents/projetos-estudos/app-livraria-decor/src/index.ts'];

swaggerAutogen(outputFile, endpointsFile, doc);
