import express from 'express';
import { alluser,createUser,deleteUser } from '../controller/userController.js';
let router = express.Router();

router.get("/user", alluser);
router.post("/user",createUser);
router.delete("/user",deleteUser);

export default router;