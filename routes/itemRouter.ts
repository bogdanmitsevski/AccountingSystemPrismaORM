import express from 'express';
const router = express.Router();
import ItemController from '../controllers/itemController';

router.get('/', ItemController.getItems);
router.post('/', ItemController.createItem);
module.exports = router;