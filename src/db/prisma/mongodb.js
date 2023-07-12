const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.runMongoDB = async () => {
  async function main() {
    const res = await prisma.$connect();
    console.dir("Pinged your db. You successfully connected to MongoDB!", res);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
