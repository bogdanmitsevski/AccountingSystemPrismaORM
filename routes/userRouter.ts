import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController';
router.post('/', UserController.Login);
router.post('/', UserController.Registration);
module.exports = router;