import express from 'express';
const router = express.Router();

//items
router.use('/items', require('../routes/itemRouter'));
router.use('/createItem', require('../routes/itemRouter'));

//sell
router.use('/createSell', require('../routes/sellRouter'));

//shift
router.use('/', require('../routes/shiftRouter'));
router.use('/', require('../routes/shiftRouter'));
router.use('/', require('../routes/shiftRouter'));

//users
router.use('/', require('../routes/userRouter'));
router.use('/', require('../routes/userRouter'));

export default router;
