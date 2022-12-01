import express from 'express';
const router = express.Router();
import ShiftController from '../controllers/shiftController';
router.post('/', ShiftController.createShift);
router.post('/', ShiftController.finishShift);
router.get('/', ShiftController.getLastShift);

module.exports = router;