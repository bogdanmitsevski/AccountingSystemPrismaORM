import express from 'express';
const router = express.Router();

//items
router.use('/items', require('../routes/itemRouter'));
router.use('/createItem', require('../routes/itemRouter'));

//sell
router.use('/createSell', require('../routes/sellRouter'));

//shift
router.use('/startShift', require('../routes/shiftRouter'));
router.use('/finishShift', require('../routes/shiftRouter'));
router.use('/getLastShift', require('../routes/shiftRouter'));

//users
router.use('/', require('../routes/userRouter'));
router.use('/', require('../routes/userRouter'));

export default router;
