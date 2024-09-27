
import prisma from "../db/prism.js";


export const get_trains=async (req, res) => {
    const { source, destination } = req.query;
    const trains = await prisma.train.findMany({
        where: { source, destination },
    });
    res.json(trains);
}