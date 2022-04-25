import swaggerAutogen from 'swagger-autogen';
import doc from './doc';

const outputFile = './swagger_output.json';
const endpointsFile = ['/Users/maycon.huanca/Documents/projetos-estudos/app-livraria-decor/src/index.ts'];
const swagg = swaggerAutogen();

swagg(outputFile, endpointsFile, doc);
