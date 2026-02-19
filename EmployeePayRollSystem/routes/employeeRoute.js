import express from 'express';
import {showUser,createUser,deleteUser,updateUser,salaryCount} from '../controller/pageController.js';

const router=express.Router();

router.get('/user',showUser);
router.post('/user',createUser);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser);
router.get('/user/:id/salaryCount',salaryCount);

export default router;