import {Response , Request } from 'express';

import pool from '../database'

class ComisionController {
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE nivel_asesor');
        res.json('nivel_asesor');
    }
}

export const comisionController = new ComisionController();
