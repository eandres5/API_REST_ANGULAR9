"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turistasController_1 = __importDefault(require("../controllers/turistasController"));
class TuristasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', turistasController_1.default.listar);
        this.router.get('/:id', turistasController_1.default.getOne);
        this.router.post('/', turistasController_1.default.create);
        this.router.put('/:id', turistasController_1.default.upDate);
        this.router.delete('/:id', turistasController_1.default.delete);
    }
}
const turistasRoutes = new TuristasRoutes();
exports.default = turistasRoutes.router;
