import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;

class SellController {
    async createSell (req:express.Request, res:express.Response) {
        try {
            const{ItemId, price} = req.body;
            const checkOpenShift = await prisma.shift.findMany({
                where: {
                    finishedAt:null
                }
            });
            const ShiftId = checkOpenShift[0].id;
            const checkItem = await prisma.item.findMany({
                where: {
                    id:ItemId
                }
            });
            if(!checkOpenShift) {
                res.json({message:'Please, open Shift at first'});
            }
            else if(Object.keys(checkItem).length == 0) {
                res.json({message:'Please, add Correct Item Id'});
            }
            else if(!price) {
                const ItemPrice = checkItem[0].price;
                const createNewSell = await prisma.sell.create({
                    data: {
                        shiftId: checkOpenShift[0].id,
                        itemId: ItemId,
                        price:ItemPrice
                    }
                });
                res.json(`New Sell with ID: ${createNewSell.id} was successfully created`);
            }
            else if(price) {
            const createNewSell = await prisma.sell.create({
                data: {
                    shiftId: checkOpenShift[0].id,
                    itemId: ItemId,
                    price:price
                }
            });
            res.json(`New Sell with ID: ${createNewSell.id} was successfully created`);
        }


        }
        catch(e) {
            console.log(e);
        }
        };
};

export default new SellController;