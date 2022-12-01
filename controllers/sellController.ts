import express from 'express';

class SellController {
    async createSell (req:express.Request, res:express.Response) {
        try {
            res.json({message: `Hello, /createSell`});
        }
        catch(e) {
            console.log(e);
        }
        };
};

export default new SellController;