import { PrismaClient } from "@prisma/client";
import { readEvents } from "./utils/file";
const prisma = new PrismaClient();

async function seed() {
  const data = await readEvents();

  await Promise.all(
    // @ts-ignore
    data?.map((record) =>
      prisma.anomaly.upsert({
        where: { id: "" },
        update: {},
        // @ts-ignore
        create: record,
      })
    )
  );
}

seed()
  .then(() => console.log("Db seeded"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
