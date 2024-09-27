
import bcrypt from 'bcryptjs';
import prisma from '../db/prism.js';



export const register=async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { username, password: hashedPassword },
    });
    res.status(201).json(user);
}