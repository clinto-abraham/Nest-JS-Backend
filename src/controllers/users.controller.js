const { jwt } = require("../commons");
const { AUTH0_SECRET } = require("../environments");
const { userServices } = require("../services/db.service/user.services");

exports.usersController = class usersController {
  static async getAllUsers(req, res) {
    return res.status(200).json({
      postgres: await userServices.findAllDB(res),
    });
  }

  static async getUserByID(req, res) {
    return res.status(200).json({
      postgres: await userServices.findAllDB(res),
    });
  }

  static async createUser(req, res) {
    return res.status(200).json({
      postgres: await userServices.findAllDB(res),
    });
  }

  static async home(req, res) {
    return res
      .status(200)
      .json({ message: "You have successfully connected to backend service" });
  }

  static async logout(req, res) {
    return res
      .status(200)
      .json({
        message:
          "You have successfully logged out and disconnected from all Database",
      });
  }
};

//   static async home(req, res) {
//     const loggedIn = req.oidc.isAuthenticated();
//     if (loggedIn) {
//       const user = req.oidc.user;
//       const email = user.email;

//       const foundUser = await userServices.findByEmailDB(email, res);
//       if (foundUser) {
//         await userServices.updateByQuery(loggedIn, email, res);
//       } else {
//         await userServices.createEmailDB(email, loggedIn, res);
//       }
//       return res.render("index", {
//         title: "Express.js Application Home",
//         loggedIn,
//         user,
//       });
//     } else {
//       return res.render("login", {
//         title: "You are logged out from the Express.js Application",
//       });
//     }
//   }

//   static async logout(req, res) {
//     const loggedIn = req.oidc.isAuthenticated();
//     const { email } = req.oidc.user;
//     const updatedUser = await userServices.updateByQuery(!loggedIn, email, res);

//     if (updatedUser) return res.redirect(301, "/logout");
//   }

//   static async profile(req, res) {
//     const user = req.oidc.user;
//     const email = user.email;
//     const loggedIn = req.oidc.isAuthenticated();
//     if (loggedIn) {
//       const jwtToken = jwt.sign({ email }, AUTH0_SECRET);
//       console.dir(`Bearer ${jwtToken}`);

//       const foundUser = await userServices.findByEmailDB(email, res);
//       if (foundUser) {
//         await userServices.updateByQuery(loggedIn, email, res);
//       } else {
//         await userServices.createEmailDB(email, loggedIn, res);
//       }
//       return res.render("profile", {
//         title: "Profile",
//         loggedIn,
//         user,
//         jwtToken,
//       });
//     } else {
//       return res.redirect(301, "/login");
//     }
//   }
// };

//     static async getUserByQuery(req, res) {
//     const { email } = req.body
//     const postgres = await userServices.findByQueryUserDB(res, email)

//     if (postgres?.email) {
//         return res.status(200).json({
//             postgres,
//         })
//     } else {
//         res.status(404).json({ message: `No user was found with email ${email} in the db` })
//     }
// }

// static async deleteUserByEmail(req, res) {
//     const { email } = req.body;
//     const number = await userServices.deleteByQueryUserDB(id)
//     return res.status(201).json({
//         postgres: `Successfully deleted ${number} user in the db with id ${id}`
//     })

// }

// static async deleteAllUsers(req, res) {
//     let imageID = []
//     const foundAllUsers = await userServices.findAllUsersDB(res);

//     for (let x of foundAllUsers) {
//         imageID.push(x.id)
//     }

//     if (imageID.length > 0) {
//         const count_of_items_deleted = imageID.length
//         const postgres = await userServices.deleteAllUsersDB(res)
//         return res.status(200).json({
//             postgres: `${postgres === 0 ? `All users are deleted successfully and ${postgres} users remains in users table` : 'Deletion action could not be completed!'}`,
//             count_of_items_deleted
//         })

//     } else {
//         res.status(404).json({
//             message: 'No users to be deleted',
//             foundAllUsers,
//             count_of_items_deleted
//         })
//     }
// }

// static async findAllUsers(req, res) {
//     const postgres = await userServices.findAllUsersDB(res)
//     return res.status(200).json({
//         postgres
//     });
// }

// static async updateuserByID(req, res) {
//     const id = req.params.id;
//     const body = req.body;
//     const number = await userServices.updateByQuery(res, id, body)
//     return res.status(201).json({
//         postgres: `Successfully updated ${number} user in the db with id ${id}`
//     })
// }
