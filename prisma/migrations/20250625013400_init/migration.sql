-- CreateEnum
CREATE TYPE "Attribute" AS ENUM ('FIRE', 'ICE', 'ELECTRIC', 'ETHER', 'PHYSICAL');

-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('S', 'A', 'B');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "units" JSONB NOT NULL,
    "wengines" JSONB NOT NULL,
    "inventory" JSONB NOT NULL,
    "loadouts" JSONB NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rank" "Rank" NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "attribute" "Attribute" NOT NULL,
    "weekly" VARCHAR(255) NOT NULL,
    "expert" VARCHAR(255) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wengine" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rank" "Rank" NOT NULL,
    "role" VARCHAR(255) NOT NULL,

    CONSTRAINT "Wengine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wengine_name_key" ON "Wengine"("name");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
