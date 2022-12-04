import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController';
router.post('/registration', UserController.Registration);
router.post('/login', UserController.Login);
module.exports = router;