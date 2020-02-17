import express, { Router } from 'express';

import turistasController from '../controllers/turistasController';

class TuristasRoutes{

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{
        this.router.get('/',turistasController.listar);
        this.router.get('/:id',turistasController.getOne);
        this.router.post('/',turistasController.create);
        this.router.put('/:id',turistasController.upDate);
        this.router.delete('/:id',turistasController.delete);
    }
}

const turistasRoutes = new TuristasRoutes();
export default turistasRoutes.router;