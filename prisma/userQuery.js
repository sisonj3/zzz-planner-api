const { PrismaClient, Prisma } = require('@prisma/client');
const inventoryJson = require('./template/inventoryJson');
const { Client } = require('pg');

//const prisma = new PrismaClient();

const prisma = new Client({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    database: process.env.DATABASE,
});

// Create user with account
async function createUser(username, password) {

    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
        },
    });

    await prisma.account.create({
        data: {
            userId: user.id,
            name: username,
            units: JSON.stringify([]),
            wengines: JSON.stringify([]),
            loadouts: JSON.stringify([]),
            inventory: inventoryJson,
        },
    });
}

// Get all users
async function getUsers() {
    const users = await prisma.user.findMany();

    return users;
}

// Get user by username
async function getUserByUsername(username) {

    prisma.connect()
        .then(() => {
            console.log("Connected to PSQL DB");

            prisma.end()
                .then(() => {
                    console.log("Connection to PSQL Closed");
                })
                .catch((err) => {
                    console.error('Error closing connection', err);
            })
        })
        .catch((err) => {
            console.error('Error connecting to PSQL Database', err);
    })

    // const user = await prisma.user.findUnique({
    //     where: {
    //         username: username,
    //     },
    //     include: {
    //         account: true,
    //     },
    // });

    // return user;
}

// Update user
async function updateUser(id, username, password) {
    await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            username: username,
            password: password,
        },
    });
}

// Delete user
async function deleteUser(id) {
    // Delete account
    await prisma.account.delete({
        where: {
            userId: id,
        },
    });

    await prisma.user.delete({
        where: {
            id: id,
        },
    });
}

module.exports = {
    createUser,
    getUsers,
    getUserByUsername,
    updateUser,
    deleteUser,
};