import express from 'express';
import moment from 'moment';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;
class ShiftController {
    async createShift (req:express.Request, res:express.Response) {
        try {
            const checkActiveShift = await prisma.shift.findMany({
                where: {
                    finishedAt: null
                }
            });
            if(Object.keys(checkActiveShift).length >= 1) {
               // const ID = checkActiveShift.id;
                res.status(400).json({message: `Please, close last Shift with ID: ${checkActiveShift[0].id}`});
            }
            else {
                const newShift = await prisma.shift.create({
                    data: {
                        startedAt: moment().toDate()
                    }
                });
                res.json({message: `New Shift with ID: ${newShift.id} was successfully created`});
            }
        }
        catch(e) {
            console.log(e);
        }
    };

    async finishShift (req:express.Request, res:express.Response) {
        try {
            const FindOpenShift = await prisma.shift.findMany({
                where: {
                    finishedAt:null
                }
            });

            await prisma.shift.update({
                where: {
                    id: FindOpenShift[0].id
                },
                data:{
                    finishedAt: moment().toDate()
                }
            });

            res.json({message: `Shift with ID: ${FindOpenShift[0].id} was closed`});
            

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