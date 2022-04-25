import path from 'path';
import swaggerAutogen from 'swagger-autogen';
import doc from './doc';

const outputFile = path.resolve(__dirname, '../', 'public', 'swagger_output.json');
const endpointsFile = [path.resolve(__dirname, '../', 'index.ts')];
const swagg = swaggerAutogen();

swagg(outputFile, endpointsFile, doc);
