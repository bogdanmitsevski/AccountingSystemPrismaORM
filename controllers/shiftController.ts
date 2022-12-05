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

            if(Object.keys(FindOpenShift).length == 0) {
                res.status(400).json({message: 'Last Shift was already closed'});
            }

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
            const Shifts = await prisma.shift.count();
            const LastShift = await prisma.shift.findMany();
            const LastShiftId = LastShift[Shifts-1].id;
            const getLastSell = await prisma.sell.findMany({
                where: {
                    shiftId: LastShiftId
                }
            });
            res.json(getLastSell);
        }
        catch(e) {
            console.log(e);
        }
    };
}

export default new ShiftController;