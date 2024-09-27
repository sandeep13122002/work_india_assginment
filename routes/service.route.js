import express from "express";
import prisma from "../db/prism.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";
import { add_trains } from "../controllers/add_trains.controller.js";
import { get_trains } from "../controllers/get_trains.controller.js";
import { booking } from "../controllers/booking.controller.js";
import { user_booking } from "../controllers/user_booking.controller.js";
const router = express.Router();


router.post('/add_trains', add_trains);

router.get('/get_trains',get_trains );

router.post('/booking', userAuth,booking );

router.get('/user_booking', userAuth,user_booking);


export default router;