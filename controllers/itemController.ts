import express from 'express';
 class ItemController {
    async getItems (req:express.Request, res:express.Response) {
        try {
            res.json({message:'Hello, /items'});
        }
        catch(e) {
            console.log(e);
        }
    };

    async createItem(req:express.Request, res:express.Response) {
        try {
            res.json({message:'Hello, /createItem'});
        }
        catch(e) {
            console.log(e);
        }
    }
 }

 export default new ItemController;

