import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    // delete the item from the database
    await prisma.item.delete({
        where: {
            id: req.body,
        },
    });
    res.status(200).json({
        message: 'Item deleted',
    });
}
