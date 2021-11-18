"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comisionController = void 0;
const database_1 = __importDefault(require("../database"));
class ComisionController {
    listado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asesores = yield database_1.default.query('SELECT * FROM nivel_asesor');
            res.json(asesores);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asesor = yield database_1.default.query('SELECT * FROM nivel_asesor WHERE id = ?', [id]);
            if (asesor.length > 0) {
                return res.json(asesor[0]);
            }
            res.status(404).json({ text: 'el asesor no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO nivel_asesor set ?', [req.body]);
            res.json({ message: 'Asesor guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asesor = yield database_1.default.query('DELETE FROM nivel_asesor WHERE id = ?', [id]);
            res.json({ message: 'Asesor eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asesor = yield database_1.default.query('UPDATE nivel_asesor set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Asesor actualizado' });
        });
    }
}
exports.comisionController = new ComisionController();
