import { Request, Response } from "express";

class FirstController {
    public home (req: Request, res: Response) {
        return res.json({
            message: 'Hello World!'
        });
    };
}

class SecondController {
    public users(req: Request, res: Response) {
        return res.json([
            {
                id: 1,
                name: 'John Dean',
                email: 'johndean@outlook.com',
                password: '******'
            },

            {
                id: 2,
                name: 'Mary Jane',
                email: 'maryJane@outlook.com',
                password: '******'
            }
        ]);
    }
}

export const firstController = new FirstController;
export const secondController = new SecondController;