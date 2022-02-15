const moongose = require("mongoose");
const URI =
  "mongodb+srv://dbSalud:db@cluster0.wpcdh.mongodb.net/dbSalud?retryWrites=true&w=majority";

const username = "dbSalud";
const password = "db";
const cluster = "cluster0.wpcdh";
const dbname = "dbSalud";

moongose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = moongose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
