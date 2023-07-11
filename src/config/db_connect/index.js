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

// const db = require("../models");
// exports.sequelizeInstance = async () => {
//   db.sequelize
//     .sync()
//     .then(() => {
//       console.dir("Synced db.");
//     })
//     .catch((err) => {
//       console.dir("Failed to sync db: " + err.message);
//     });
//   try {
//     await db.sequelize.authenticate();
//     console.dir(
//       "Postgresql Database connection established with respect to sequelize ORM on local postgres server 5432."
//     );
//   } catch (e) {
//     console.dir("Database connection failed", e);
//     process.exit(1);
//   }
// };
