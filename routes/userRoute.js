import express from "express";
import {CreateStudent, DeleteStudent, ReadStudent, UpdateStudent} from "../controllers/usercontroller.js";
const router = express.Router();
router.post("/add",CreateStudent);
router.get("/get",ReadStudent);
router.put("/update/:id",UpdateStudent);
router.delete("/delete/:id",DeleteStudent)
export default router;