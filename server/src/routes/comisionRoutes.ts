import { Router } from "express";

import { comisionController } from "../controller/comisionController";

class comisionRoutes{
    
    public router : Router = Router();

    constructor() {
        this.config();
    }
    config(): void{
        this.router.get('/', comisionController.index);
    }
}
const comisionRouts = new comisionRoutes();
export default comisionRouts.router;