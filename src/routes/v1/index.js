import { Router } from "express";

import healthcheck from "./healthcheck.routes";


const router = Router();

router.use('/', healthcheck);


export default router;
