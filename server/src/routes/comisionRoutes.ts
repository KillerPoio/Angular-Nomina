import { Router } from "express";

import { comisionController } from "../controller/comisionController";

class comisionRoutes{
    
    public router : Router = Router();

    constructor() {
        this.config();
    }
    config(): void{
        this.router.get('/', comisionController.listado);
        this.router.get('/:id', comisionController.getOne);
        this.router.post('/', comisionController.create);
        this.router.put('/:id', comisionController.update);
        this.router.delete('/:id', comisionController.delete);
    }
}
const comisionRouts = new comisionRoutes();
export default comisionRouts.router;