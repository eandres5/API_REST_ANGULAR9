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
const database_1 = __importDefault(require("../database"));
class TuristasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM reservaciones');
            res.json(games[0]);
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turis = yield database_1.default.query('SELECT * FROM reservaciones');
            return res.json(turis);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tur = yield database_1.default.query('SELECT * FROM reservaciones where id = ?', [id]);
            if (tur.length > 0) {
                return res.json(tur[0]);
            }
            res.status(404).json({ text: 'El resgistro no existe' });
            console.log(tur);
            res.json({ text: 'Resgistro encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reservaciones set ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM reservaciones WHERE id = ?', [id]);
            res.json({ text: 'El registro fue eliminado' });
        });
    }
    upDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE reservaciones set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Registro actualizado' });
        });
    }
}
const turistasController = new TuristasController();
exports.default = turistasController;
