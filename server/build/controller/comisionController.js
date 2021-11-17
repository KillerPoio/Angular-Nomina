"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comisionController = void 0;
const database_1 = __importDefault(require("../database"));
class ComisionController {
    index(req, res) {
        database_1.default.query('DESCRIBE nivel_asesor');
        res.json('nivel_asesor');
    }
}
exports.comisionController = new ComisionController();
