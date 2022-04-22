const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MyBooks API',
    description: 'a simple api to store my books and comments about it',
  },
  host: 'localhost:3001',
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFile = ['/Users/maycon.huanca/Documents/projetos-estudos/app-livraria-decor/src/index.ts'];

swaggerAutogen(outputFile, endpointsFile, doc);
