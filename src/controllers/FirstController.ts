import { Request, Response } from "express";

class FirstController {
    public home(req: Request, res: Response) {
        return res.json({
            message: 'Hello World!'
        });
    }

    public users(req: Request, res: Response) {
        return res.json([
            {
                name: 'John Doe',
                age: 54
            },

            {
                name: 'Mary Sun',
                age: 32
            }
        ]);
    }
}

export const firstController = new FirstController();