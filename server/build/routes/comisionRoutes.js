"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comisionController_1 = require("../controller/comisionController");
class comisionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', comisionController_1.comisionController.listado);
        this.router.get('/:id', comisionController_1.comisionController.getOne);
        this.router.post('/', comisionController_1.comisionController.create);
        this.router.put('/:id', comisionController_1.comisionController.update);
        this.router.delete('/:id', comisionController_1.comisionController.delete);
    }
}
const comisionRouts = new comisionRoutes();
exports.default = comisionRouts.router;
