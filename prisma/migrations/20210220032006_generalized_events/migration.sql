/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_anomaly_id_fkey";

-- AlterTable
ALTER TABLE "Anomaly" ADD COLUMN     "events" JSONB[];

-- DropTable
DROP TABLE "Event";
