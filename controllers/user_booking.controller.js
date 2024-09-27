
import prisma from "../db/prism.js";


export const user_booking=async (req, res) => {
    const bookings = await prisma.booking.findMany({
        where: { userId: req.userId },
        include: { train: true },
    });
    res.json(bookings);
}