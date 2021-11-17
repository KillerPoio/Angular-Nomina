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
        this.router.get('/', comisionController_1.comisionController.index);
    }
}
const comisionRouts = new comisionRoutes();
exports.default = comisionRouts.router;
