import express from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from "../db/prism.js";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
const router = express.Router();


router.post('/register', register);

router.post('/login', login);

export default router;