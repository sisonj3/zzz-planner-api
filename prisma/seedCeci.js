const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv").config();

const prisma = new PrismaClient();

async function seedCeci() {
    console.log("Seeding Ceci...")

    // Hash password
    bcrypt.hash(process.env.PASSWORD, 10, async (err, hashedPassword) => {
        const user = await prisma.user.create({
            data: {
                username: process.env.USERNAME,
                password: hashedPassword,
            },
        });

        await prisma.account.create({
            data: {
                userId: user.id,
                name: process.env.USERNAME,
                units: JSON.stringify(process.env.UNITS),
                wengines: JSON.stringify(process.env.WENGINES),
                loadouts: JSON.stringify(process.env.LOADOUTS),
                inventory: JSON.stringify(process.env.INVENTORY),
            },
        });
    });


    console.log("Done!");
}

module.exports = seedCeci;