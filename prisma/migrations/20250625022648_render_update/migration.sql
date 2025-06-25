/*
  Warnings:

  - Changed the type of `role` on the `Character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `weekly` on the `Character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `expert` on the `Character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `role` on the `Wengine` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ATTACK', 'STUN', 'ANOMALY', 'SUPPORT', 'DEFENDER', 'RUPTURE');

-- CreateEnum
CREATE TYPE "Weekly" AS ENUM ('Ferocious_Grip', 'Living_Drive', 'Finale_Dance_Shoes', 'Scarlet_Engine', 'Sycophants_Refinement', 'Exuvia_of_Refinement');

-- CreateEnum
CREATE TYPE "Expert" AS ENUM ('Murderous_Obituary', 'Crimson_Awe', 'Ethereal_Pursuit', 'Steel_Malice', 'Destructive_Advance', 'Falling_Fist', 'Stealth_Phantom', 'Thunderous_Dragon', 'Mortal_Cleave', 'Miasmic_Elytron');

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL,
DROP COLUMN "weekly",
ADD COLUMN     "weekly" "Weekly" NOT NULL,
DROP COLUMN "expert",
ADD COLUMN     "expert" "Expert" NOT NULL;

-- AlterTable
ALTER TABLE "Wengine" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;
