import express from 'express';
class ShiftController {
    async createShift (req:express.Request, res:express.Response) {
        try {
            res.json({message:'Hello, /createShift'});
        }
        catch(e) {
            console.log(e);
        }
    };

    async finishShift (req:express.Request, res:express.Response) {
        try {
            res.json({message:'Hello, /finishShift'});
        }
        catch(e) {
            console.log(e);
        }
    };

    async getLastShift (req:express.Request, res:express.Response) {
        try {
            res.json({message:'Hello, /getLastShift'});
        }
        catch(e) {
            console.log(e);
        }
    };
}

export default new ShiftController;