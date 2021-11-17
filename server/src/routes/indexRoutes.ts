import { Router } from "express";

import { indexController } from '../controller/indexController';

class indexRoutes{
    
    public router : Router = Router();

    constructor() {
        this.config();
    }
    config(): void{
        this.router.get('/', indexController.index );
    }
}
const indexRouts = new indexRoutes();
export default indexRouts.router;