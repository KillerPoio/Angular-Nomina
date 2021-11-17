import {Response , Request } from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.send("HelloWorld") ;  
    }
}

export const indexController = new IndexController();