import {Response , Request, text } from 'express';

import pool from '../database'

class ComisionController {
    public async listado (req: Request, res: Response) {
        const asesores = await pool.query('SELECT * FROM nivel_asesor');
        res.json(asesores);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const asesor = await pool.query('SELECT * FROM nivel_asesor WHERE id = ?', [id]);
        if(asesor.lenght > 0){
            return res.json(asesor[0]);
        }
        res.status(404).json({text: 'el asesor no existe'})
    }

    public async create (req: Request, res: Response) {
        await pool.query('INSERT INTO nivel_asesor set ?', [req.body]);
        res.json({message: 'Asesor guardado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        const asesor = await pool.query('DELETE FROM nivel_asesor WHERE id = ?', [id]);
        res.json({message: 'Asesor eliminado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const asesor = await pool.query('UPDATE nivel_asesor set ? WHERE id = ?', [req.body , id]);  
        res.json({message: 'Asesor actualizado'});
    }
}

export const comisionController = new ComisionController();
