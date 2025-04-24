/*
  Warnings:

  - The values [Mortal_Cleave] on the enum `Expert` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Expert_new" AS ENUM ('Murderous_Obituary', 'Crimson_Awe', 'Ethereal_Pursuit', 'Steel_Malice', 'Destructive_Advance', 'Falling_Fist', 'Stealth_Phantom', 'Thunderous_Dragon');
ALTER TABLE "Character" ALTER COLUMN "expert" TYPE "Expert_new" USING ("expert"::text::"Expert_new");
ALTER TYPE "Expert" RENAME TO "Expert_old";
ALTER TYPE "Expert_new" RENAME TO "Expert";
DROP TYPE "Expert_old";
COMMIT;
