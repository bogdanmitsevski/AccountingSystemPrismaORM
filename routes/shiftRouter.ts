import express from 'express';
const router = express.Router();
import ShiftController from '../controllers/shiftController';
import authMiddleware from '../middleware/authMiddleware';
router.post('/', authMiddleware, ShiftController.createShift);
router.post('/', authMiddleware, ShiftController.finishShift);
router.get('/', authMiddleware, ShiftController.getLastShift);

module.exports = router;