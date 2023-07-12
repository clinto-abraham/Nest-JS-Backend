const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");

const { auth0config } = require("./src/config/auth0");
const corsOptionsConfig = require("./src/config/cors");
const { express, auth } = require("./src/commons");
const { runMongoDB } = require("./src/db/prisma/mongodb");
// const { sequelizeInstance } = require('./db/connection')

const app = express();
const port = process.env.PORT || 5000;
const logFile = fs.createWriteStream("./myLogFile.log", { flags: "a" }); // log all requests to myLogFile.log //use {flags: 'w'} to open in write mod
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.set("views", path.join(__dirname, "views")); // view engine setup
app.set("view engine", "pug");

app.use(express.json({ limit: "50mb" })); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // parse requests of content-type - application/x-www-form-urlencoded
app.use((req, res, next) => {
  res.set("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
  next();
});
app.use(helmet());
app.use(cors(corsOptionsConfig));
app.use(auth(auth0config)); // auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
); // log only 4xx and 5xx responses to console
app.use(morgan("combined", { stream: logFile }));
app.use(upload.single("file"));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

require("./src/routes")(app);

app.listen(port, async () => {
  await runMongoDB().catch(console.dir);
  // await sequelizeInstance()
  console.dir(
    `Password manager Express.js Backend app listening on http://localhost:${port}`
  );
  console.dir(`Mode    =>     ${app.locals.settings.env}`);
});
