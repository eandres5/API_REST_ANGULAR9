import {Request, Response} from 'express';

import pool from "../database";


class TuristasController{

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM reservaciones');
        res.json(games[0]);
    }

    public async listar (req: Request,res: Response){
        const turis = await pool.query('SELECT * FROM reservaciones');
        return res.json(turis);
    }

    public async getOne(req: Request, res: Response){
        const {id} = req.params;
        const tur = await pool.query('SELECT * FROM reservaciones where id = ?', [id]);
        if (tur.length > 0){
            return res.json(tur[0]);
        }
        res.status(404).json({text: 'El resgistro no existe'});
        console.log(tur);
        res.json({text: 'Resgistro encontrado'});
    }

    async create (req: Request, res: Response) {
        await pool.query('INSERT INTO reservaciones set ?', [req.body]);
        res.json({message: 'Registro guardado'});
    }

    public async delete (req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM reservaciones WHERE id = ?', [id]);
        res.json({text: 'El registro fue eliminado'});
    }

    public async upDate(req:Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE reservaciones set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Registro actualizado'});
    }
}

const turistasController = new TuristasController();
export default turistasController;