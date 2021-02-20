/*
  Warnings:

  - You are about to drop the `Camera` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Anomaly" DROP CONSTRAINT "Anomaly_camera_uuid_fkey";

-- AlterTable
ALTER TABLE "Anomaly" ALTER COLUMN "camera_uuid" SET DEFAULT E'camera-1';

-- DropTable
DROP TABLE "Camera";
