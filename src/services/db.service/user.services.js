const { dataConversion } = require("../../commons");
const db = require("../../../db/models");
const EmailModel = db.email;

exports.userServices = class userServices {
  static async findAllDB(res) {
    try {
      return dataConversion(await EmailModel.findAll());
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching all data with respect to EmailModel.`,
        error,
      });
    }
  }

  static async findByEmailDB(email, res) {
    try {
      return dataConversion(await EmailModel.findOne({ where: { email } }));
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching data with email: ${email} in the params and with respect to model: EmailModel.`,
        error,
      });
    }
  }

  static async createEmailDB(email, loggedIn, res) {
    try {
      return dataConversion(
        await EmailModel.create({
          email,
          loggedIn,
        })
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while creating user with email: ${email} with respect to model: EmailModel.`,
        error,
      });
    }
  }

  static async updateByQuery(loggedIn, email, res) {
    try {
      return dataConversion(
        await EmailModel.update(
          {
            loggedIn,
          },
          { where: { email } }
        )
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while updating data with email: ${email} in the params and with respect to model: EmailModel.`,
        error,
      });
    }
  }
};

// const { dataConversion } = require('../../commons')
// const db = require('../../../db/models');
// const EmailModel = db.users;

// exports.userServices = class userServices {

//     static async findAllUsersDB(res) {
//         try {
//             return dataConversion(await UsersModel.findAll())
//         } catch (error) {
//             return res.status(500).json({
//                 message: `Some error occurred while fetching all data with respect to UsersModel.`,
//                 error
//             })
//         }
//     }

//        static async findUserByEmailDB(res, email) {
//         try {
//             return dataConversion(await UsersModel.findOne({ where: { email } }))
//         } catch (error) {
//             return res.status(500).json({
//                 message: `Some error occurred while fetching data with email: ${email} in the params and with respect to model: UsersModel.`,
//                 error
//             })
//         }
//     }

//     static async createUserDB(res, id, body) {
//         const { email } = body;
//         try {
//             return dataConversion(await UsersModel.create(
//                 {
//                     id,
//                     email
//                 }))
//         } catch (error) {
//             return res.status(500).json({
//                 message: `Some error occurred while creating user with email: ${email} with respect to model: UsersModel.`,
//                 error
//             })
//         }
//     }

//     static async findByQueryUserDB(res, email) {
//         try {
//             return dataConversion(await UsersModel.findOne({ where: { email } }))
//         } catch (error) {
//             return res.status(500).json({
//                 message: `Some error occurred while fetching data with email: ${email} in the params and with respect to model: UsersModel.`,
//                 error
//             })
//         }
//     }

//     static async deleteByQueryUserDB(email) {
//         try {
//             return dataConversion(await UsersModel.destroy({ where: { email } }))
//         } catch (error) {
//             return res.status(500).json({
//                 message: `Some error occurred while deleting data with email: ${email} in the params and with respect to model: UsersModel.`,
//                 error
//             })
//         }
//     }

//     static async deleteAllUsersDB(res) {
//         try {
//             return await UsersModel.destroy({
//                 where: {},
//                 truncate: true,
//             })
//         } catch (error) {
//             return res.status(500).json({
//                 message: `There are no data to be deleted or some error occurred while deleting all data with respect to model: UsersModel.`,
//                 error
//             })
//         }
//     }

// }
