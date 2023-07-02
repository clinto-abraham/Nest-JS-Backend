const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");

const { auth0config } = require("./src/config/auth0");
const corsOptionsConfig = require("./src/config/cors");
const { express, auth } = require("./src/commons");
const { sequelizeInstance } = require("./db/connection");

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

require("./src/routes")(app);

app.listen(port, async () => {
  await sequelizeInstance();
  console.dir(
    `Clinto personal API - Express.js Backend app listening on port ${port}`
  );
  console.dir(`Mode    =>     ${app.locals.settings.env}`);
});
