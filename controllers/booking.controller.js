
import prisma from "../db/prism.js";


export const booking =async (req, res) => {
    const { trainId } = req.body;
    const train = await prisma.train.findUnique({ where: { id: trainId } });

    if (!train || train.seatsAvailable <= 0) {
        return res.status(400).send('No seats available');
    }

    const booking = await prisma.booking.create({
        data: { userId: req.userId, trainId },
    });

    await prisma.train.update({
        where: { id: trainId },
        data: { seatsAvailable: train.seatsAvailable - 1 },
    });

    res.json(booking);
}