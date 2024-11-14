import express from 'express';
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import index from './api/index.js';
import data from './api/data.js';

const swaggerDocument = YAML.load('./openapi/api.yaml');
const app = express();
app.use(express.json());

app.use(cors());

app.use('/doc', swaggerUi.serve,   swaggerUi.setup(swaggerDocument));
app.use('/', index);
app.use('/data', data);

export default app;