import express from 'express';
import bp from 'body-parser';
import Router from './route';

let app = express();

app.set('port', process.env.PORT || 3000);
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use('/', Router);

export default app;
