-- CreateTable
CREATE TABLE "Anomaly" (
    "module_id" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "json_version" TEXT NOT NULL DEFAULT E'1.1.0',
    "camera_uuid" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("module_id")
);

-- CreateTable
CREATE TABLE "Camera" (
    "uuid" TEXT NOT NULL,

    PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "images" JSONB[],
    "attributes" JSONB[],
    "alerts" JSONB[],
    "trajectory" JSONB NOT NULL,
    "instance" TEXT NOT NULL DEFAULT E'car',
    "anomaly_id" TEXT,
    "module_version" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Anomaly" ADD FOREIGN KEY ("camera_uuid") REFERENCES "Camera"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD FOREIGN KEY ("anomaly_id") REFERENCES "Anomaly"("module_id") ON DELETE SET NULL ON UPDATE CASCADE;
