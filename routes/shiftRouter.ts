import express from 'express';
const router = express.Router();
import ShiftController from '../controllers/shiftController';
router.post('/startShift', ShiftController.createShift);
router.post('/finishShift', ShiftController.finishShift);
router.get('/getLastShift', ShiftController.getLastShift);

module.exports = router;