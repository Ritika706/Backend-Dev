import express from 'express';
import {employeeData} from '../models/data.js';
import {createEmployee,getEmployeeById,updateEmployee,deleteEmployee} from '../controllers/employeeController.js';
const router=express.Router();

router.post('/employee',createEmployee);
router.get('/employee/:id',getEmployeeById);
router.put('/employee/:id',updateEmployee);
router.delete('/employee/:id',deleteEmployee);

export default router;