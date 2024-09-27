
import prisma from "../db/prism.js";


export const add_trains= async (req, res) => {
    const { source, destination, seatsAvailable } = req.body;
    const train = await prisma.train.create({
        data: { source, destination, seatsAvailable },
    });
    res.status(201).json(train);
}