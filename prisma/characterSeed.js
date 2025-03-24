const { PrismaClient, Attribute, Role, Rank, Weekly, Expert } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedCharacters() {
    console.log("Seeding Characters...");

    // A Ranks
    const anby = await prisma.character.upsert({
        where: { name: 'Anby' },
        update: {},
        create: {
            name: 'Anby',
            rank: Rank.A,
            role: Role.STUN,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Murderous_Obituary,
        },
    });

    const nicole = await prisma.character.upsert({
        where: { name: 'Nicole' },
        update: {},
        create: {
            name: 'Nicole',
            rank: Rank.A,
            role: Role.SUPPORT,
            attribute: Attribute.ETHER,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Murderous_Obituary,
        },
    });

    const billy = await prisma.character.upsert({
        where: { name: 'Billy' },
        update: {},
        create: {
            name: 'Billy',
            rank: Rank.A,
            role: Role.ATTACK,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Ethereal_Pursuit,
        },
    });

    const corin = await prisma.character.upsert({
        where: { name: 'Corin' },
        update: {},
        create: {
            name: 'Corin',
            rank: Rank.A,
            role: Role.ATTACK,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Crimson_Awe,
        },
    });

    const anton = await prisma.character.upsert({
        where: { name: 'Anton' },
        update: {},
        create: {
            name: 'Anton',
            rank: Rank.A,
            role: Role.ATTACK,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Destructive_Advance,
        },
    });

    const ben = await prisma.character.upsert({
        where: { name: 'Ben' },
        update: {},
        create: {
            name: 'Ben',
            rank: Rank.A,
            role: Role.DEFENDER,
            attribute: Attribute.FIRE,
            weekly: Weekly.Living_Drive,
            expert: Expert.Steel_Malice,
        },
    });

    const seth = await prisma.character.upsert({
        where: { name: 'Seth' },
        update: {},
        create: {
            name: 'Seth',
            rank: Rank.A,
            role: Role.DEFENDER,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Falling_Fist,
        },
    });

    const lucy = await prisma.character.upsert({
        where: { name: 'Lucy' },
        update: {},
        create: {
            name: 'Lucy',
            rank: Rank.A,
            role: Role.SUPPORT,
            attribute: Attribute.FIRE,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Steel_Malice,
        },
    });

    const piper = await prisma.character.upsert({
        where: { name: 'Piper' },
        update: {},
        create: {
            name: 'Piper',
            rank: Rank.A,
            role: Role.ANOMALY,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Crimson_Awe,
        },
    });

    const soukaku = await prisma.character.upsert({
        where: { name: 'Soukaku' },
        update: {},
        create: {
            name: 'Soukaku',
            rank: Rank.A,
            role: Role.SUPPORT,
            attribute: Attribute.ICE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Murderous_Obituary,
        },
    });

    // S Ranks
    const nekomata = await prisma.character.upsert({
        where: { name: 'Nekomata' },
        update: {},
        create: {
            name: 'Nekomata',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Crimson_Awe,
        },
    });

    const lycaon = await prisma.character.upsert({
        where: { name: 'Lycaon' },
        update: {},
        create: {
            name: 'Lycaon',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.ICE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Ethereal_Pursuit,
        },
    });

    const ellen = await prisma.character.upsert({
        where: { name: 'Ellen' },
        update: {},
        create: {
            name: 'Ellen',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ICE,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Murderous_Obituary,
        },
    });

    const rina = await prisma.character.upsert({
        where: { name: 'Rina' },
        update: {},
        create: {
            name: 'Rina',
            rank: Rank.S,
            role: Role.SUPPORT,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Destructive_Advance,
        },
    });

    const koleda = await prisma.character.upsert({
        where: { name: 'Koleda' },
        update: {},
        create: {
            name: 'Koleda',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.FIRE,
            weekly: Weekly.Living_Drive,
            expert: Expert.Steel_Malice,
        },
    });

    const grace = await prisma.character.upsert({
        where: { name: 'Grace' },
        update: {},
        create: {
            name: 'Grace',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Destructive_Advance,
        },
    });

    const zhuyuan = await prisma.character.upsert({
        where: { name: 'Zhu Yuan' },
        update: {},
        create: {
            name: 'Zhu Yuan',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ETHER,
            weekly: Weekly.Living_Drive,
            expert: Expert.Ethereal_Pursuit,
        },
    });

    const qingyi = await prisma.character.upsert({
        where: { name: 'Qingyi' },
        update: {},
        create: {
            name: 'Qingyi',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Ethereal_Pursuit,
        },
    });

    const jane = await prisma.character.upsert({
        where: { name: 'Jane' },
        update: {},
        create: {
            name: 'Jane',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Ferocious_Grip,
            expert: Expert.Falling_Fist,
        },
    });

    const caesar = await prisma.character.upsert({
        where: { name: 'Caesar' },
        update: {},
        create: {
            name: 'Caesar',
            rank: Rank.S,
            role: Role.DEFENDER,
            attribute: Attribute.PHYSICAL,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Stealth_Phantom,
        },
    });

    const burnice = await prisma.character.upsert({
        where: { name: 'Burnice' },
        update: {},
        create: {
            name: 'Burnice',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.FIRE,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Stealth_Phantom,
        },
    });

    const lighter = await prisma.character.upsert({
        where: { name: 'Lighter' },
        update: {},
        create: {
            name: 'Lighter',
            rank: Rank.S,
            role: Role.STUN,
            attribute: Attribute.FIRE,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Crimson_Awe,
        },
    });

    const yanagi = await prisma.character.upsert({
        where: { name: 'Yanagi' },
        update: {},
        create: {
            name: 'Yanagi',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Living_Drive,
            expert: Expert.Destructive_Advance,
        },
    });

    const harumasa = await prisma.character.upsert({
        where: { name: 'Harumasa' },
        update: {},
        create: {
            name: 'Harumasa',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.ELECTRIC,
            weekly: Weekly.Sycophants_Refinement,
            expert: Expert.Thunderous_Dragon,
        },
    });

    const miyabi = await prisma.character.upsert({
        where: { name: 'Miyabi' },
        update: {},
        create: {
            name: 'Miyabi',
            rank: Rank.S,
            role: Role.ANOMALY,
            attribute: Attribute.ICE,
            weekly: Weekly.Sycophants_Refinement,
            expert: Expert.Thunderous_Dragon,
        },
    });

    const soldier11 = await prisma.character.upsert({
        where: { name: 'Soldier 11' },
        update: {},
        create: {
            name: 'Soldier 11',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.FIRE,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Destructive_Advance,
        },
    });

    const astra = await prisma.character.upsert({
        where: { name: 'Astra Yao' },
        update: {},
        create: {
            name: 'Astra Yao',
            rank: Rank.S,
            role: Role.SUPPORT,
            attribute: Attribute.ETHER,
            weekly: Weekly.Finale_Dance_Shoes,
            expert: Expert.Thunderous_Dragon,
        },
    });

    const evelyn = await prisma.character.upsert({
        where: { name: 'Evelyn' },
        update: {},
        create: {
            name: 'Evelyn',
            rank: Rank.S,
            role: Role.ATTACK,
            attribute: Attribute.FIRE,
            weekly: Weekly.Scarlet_Engine,
            expert: Expert.Steel_Malice,
        },
    });
    
    console.log("Done!");
}

module.exports = seedCharacters;