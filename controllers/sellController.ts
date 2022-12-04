import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;

class SellController {
    async createSell (req:express.Request, res:express.Response) {
        try {
            const checkOpenShift = await prisma.shift.findMany({
                where: {
                    finishedAt:null
                }
            });
            const checkItem = await prisma.item.findMany();
            if(checkOpenShift) {
                res.json({message:'Please, open Shift at first'});
            }
            else if(Object.keys(checkItem).length == 0) {
                res.json({message:'Please, create new Item'});
            }


        }
        catch(e) {
            console.log(e);
        }
        };
};

export default new SellController;