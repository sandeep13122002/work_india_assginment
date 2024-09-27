import prisma from "../db/prism.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login=async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.cookie('authToken', token, {
        httpOnly: true, // Prevents client-side access
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite: 'Strict', // Protect against CSRF
        maxAge: 3600000 // 1 hour
    });

    res.send("Login Successfull")

}