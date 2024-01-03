const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// default route
app.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});

// connection configurations
const dbConn = mysql.createConnection({
  host: "192.168.1.101",
  user: "khushi",
  password: "1234",
  port: 3306,
  database: "athena",
});

// connect to database
dbConn.connect();

app.get("/oee", function (req, res) {
  dbConn.query(
    "SELECT t.Machine_ID, t.OEE, t.Parts_produced, t.Parts_rejected, t.Target, t.Availability, t.Performance, t.Quality FROM oee AS t INNER JOIN (SELECT Machine_ID, MAX(Stamp) AS MaxStamp FROM oee GROUP BY Machine_ID) AS latest ON t.Machine_ID = latest.Machine_ID AND t.Stamp = latest.MaxStamp",
    function (error, results, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(results));
    }
  );
});

app.get("/Rework", function (req, res) {
  dbConn.query("SELECT * from Rework", function (error, result, fields) {
    if (error) throw error;
    console.log(error);
    return res.send(JSON.stringify(result));
  });
});

app.get("/Rejection", function (req, res) {
  dbConn.query("SELECT * FROM Rejection", function (error, result, fields) {
    if (error) throw error;
    return res.send(JSON.stringify(result));
  });
});

app.get("/DataAnalysis", function (req, res) {
  dbConn.query(
    'SELECT * FROM LongTermMoving_Analysis WHERE MachineName = "SPM5"',
    function (error, result, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(result));
    }
  );
});

app.get("/LMW", function (req, res) {
  dbConn.query(
    'SELECT * FROM LongTermMoving_Analysis WHERE MachineName = "LMW"',
    function (error, result, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(result));
    }
  );
});

app.get("/univmil", function (req, res) {
  dbConn.query(
    'SELECT * FROM LongTermMoving_Analysis WHERE MachineName = "UnivMil"',
    function (error, result, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(result));
    }
  );
});

app.get("/AllData", function (req, res) {
  dbConn.query(
    'SELECT * FROM LongTermMoving_Analysis WHERE MachineName = "Vertex"',
    function (error, result, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(result));
    }
  );
});

app.get("/Spm4", function (req, res) {
  dbConn.query(
    'SELECT * FROM LongTermMoving_Analysis WHERE MachineName = "SPM4"',
    function (error, result, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(result));
    }
  );
});

app.get("/Grinding", function (req, res) {
  dbConn.query(
    'SELECT * FROM LongTermMoving_Analysis WHERE MachineName = "Grinding"',
    function (error, result, fields) {
      if (error) throw error;
      return res.send(JSON.stringify(result));
    }
  );
});

app.use(bodyParser.json());



// set port
app.listen(3010, function () {
  console.log("Node app is running on port 3010");
});

module.exports = app;
