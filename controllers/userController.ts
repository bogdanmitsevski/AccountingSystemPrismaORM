import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const generateJwt = (id: any, email: any) => {
  return jwt.sign(
    { id, email },
        process.env.SECRET_KEY as string,
        { expiresIn: '24h' }
  );
};
class UserController {
  async Registration(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    const checkUser = await prisma.user.findMany({
      where: { email: email }
    });
    if (Object.keys(checkUser).length >= 1) {
      res.json(`User with email ${email} was already created`);
    } else {
      const hashPassword = await bcrypt.hash(password, 8);
      const newUser = await prisma.user.create({
        data: {
            email: email,
            password: hashPassword
        }
      });
      const token = generateJwt(newUser.id, newUser.email);
      res.json({message: `New USER WITH EMAIL: ${email} was successfully created with Token ${token}`});
    }
  }

  async Login(req:express.Request, res:express.Response) {
    const { email, password } = req.body;

    const checkUser = await prisma.user.findMany({
      where: { email: email }
    });

    let comparePassword = bcrypt.compareSync(password, checkUser[0].password);

    if (!checkUser) {
      res.status(400).json(`User with ${email} not found`);
    } else if (!comparePassword) {
      res.status(400).json('Invalid password');
    } else {
      const token = generateJwt(checkUser[0].id, checkUser[0].email);
      res.json({ message: `User with EMAIL: ${email} was successfully logined with ${token} TOKEN` });
    }
  }
}

export default new UserController();
