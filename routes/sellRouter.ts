import express from 'express';
const router = express.Router();
import SellController from '../controllers/sellController';

router.post('/', SellController.createSell);
module.exports = router;