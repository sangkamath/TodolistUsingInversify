import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from './constant/types';
import './controller/home';
import './controller/todolist';
import {TodoClient} from "./todoclient/todoclient";
import ApiManager from "./apimanager/apimanager";

// load everything needed to the Container
let container = new Container();
container.bind<TodoClient>(TYPES.TodoClient).to(ApiManager);

// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');
