import Router from "express";
import v1 from "./v1/index";

const routes = Router();
const base = '/api/v1';

routes.use(base, v1);

export default routes;