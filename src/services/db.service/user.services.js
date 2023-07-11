const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const UserModel = prisma.User;

const { dataConversion } = require("../../commons");

exports.userServices = class userServices {
  static async findAllDB(res) {
    try {
      return dataConversion(await UserModel.findAll());
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching all data with respect to UserModel.`,
        error,
      });
    }
  }

  static async findByEmailDB(email, res) {
    try {
      return dataConversion(await UserModel.findOne({ where: { email } }));
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching data with email: ${email} in the params and with respect to model: UserModel.`,
        error,
      });
    }
  }

  static async createEmailDB(email, loggedIn, res) {
    try {
      return dataConversion(
        await UserModel.create({
          email,
          loggedIn,
        })
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while creating user with email: ${email} with respect to model: UserModel.`,
        error,
      });
    }
  }

  static async updateByQuery(loggedIn, email, res) {
    try {
      return dataConversion(
        await UserModel.update(
          {
            loggedIn,
          },
          { where: { email } }
        )
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while updating data with email: ${email} in the params and with respect to model: UserModel.`,
        error,
      });
    }
  }
};

// const db = require("../../../db/models");
// const EmailModel = db.email;

// static async findAllDB(res) {
//     try {
//       return dataConversion(await UserModel.findAll());
//     } catch (error) {
//       return res.status(500).json({
//         message: `Some error occurred while fetching all data with respect to UserModel.`,
//         error,
//       });
//     }
//   }

//   static async findByEmailDB(email, res) {
//     try {
//       return dataConversion(await EmailModel.findOne({ where: { email } }));
//     } catch (error) {
//       return res.status(500).json({
//         message: `Some error occurred while fetching data with email: ${email} in the params and with respect to model: EmailModel.`,
//         error,
//       });
//     }
//   }

//   static async createEmailDB(email, loggedIn, res) {
//     try {
//       return dataConversion(
//         await EmailModel.create({
//           email,
//           loggedIn,
//         })
//       );
//     } catch (error) {
//       return res.status(500).json({
//         message: `Some error occurred while creating user with email: ${email} with respect to model: EmailModel.`,
//         error,
//       });
//     }
//   }

//   static async updateByQuery(loggedIn, email, res) {
//     try {
//       return dataConversion(
//         await EmailModel.update(
//           {
//             loggedIn,
//           },
//           { where: { email } }
//         )
//       );
//     } catch (error) {
//       return res.status(500).json({
//         message: `Some error occurred while updating data with email: ${email} in the params and with respect to model: EmailModel.`,
//         error,
//       });
//     }
//   }
