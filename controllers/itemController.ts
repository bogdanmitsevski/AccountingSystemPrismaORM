import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;
 class ItemController {
    async getItems (req:express.Request, res:express.Response) {
        try {
            const allItems = await prisma.item.findMany();
            res.json(allItems);
        }
        catch(e) {
            console.log(e);
        }
    };

    async createItem(req:express.Request, res:express.Response) {
        try {
            const {name, price} = req.body;
            const checkItem = await prisma.item.findMany({
                where: {
                    name: {
                        contains:name
                    }
                }
            });

            if(Object.keys(checkItem).length >= 1) {
                res.status(400).json({message:`Item with ${name} was already created`});
            }

            else {
                await prisma.item.create({
                    data:{
                        name:name,
                        price:price
                    }
                });
                res.json({message:`New Item with NAME: ${name} was successfully created`});
            }
        }
        catch(e) {
            console.log(e);
        }
    }
 }

 export default new ItemController;

