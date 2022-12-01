import express from 'express';
class UserController {
    async Login (req:express.Request, res:express.Response) {
    try {
        res.json({message:'Hello, /login'});
    }
    catch(e) {
        console.log(e);
    }
    };

    async Registration (req:express.Request, res:express.Response) {
        try {
            res.json({message:'Hello, /registration'});
        }
        catch(e) {
            console.log(e);
        }
        };
}

export default new UserController;