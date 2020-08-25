const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongodbsrvrurl = "mongodb+srv://dbPracUserAug20:pwd11!!@10aug2020-dev01.mbw31.gcp.mongodb.net/mobilestore";

//mongoose.connect('mongodb://localhost/mobilestore');
mongoose.connect(mongodbsrvrurl);



let adminModel = require("./model/admin");

let app = express();
app.use(cors());
app.use(bodyparser.json());

app.post("/api/adminLogin", function (req, res) {
    let uname = req.body.email;
    let upass = req.body.pass;

    adminModel.find({
            username: uname,
            password: upass,
        },
        function (err, data) {
            if (err) {
                res.json({
                    err: 1,
                    msg: "something went wrong",
                });
            } else if (data.length == 0) {
                res.json({
                    err: 1,
                    msg: "something went wrong",
                });
            } else {
                res.json({
                    err: 0,
                    msg: "login successfully",
                    data: uname,
                });
            }
        }
    );
});

app.listen(8899, () => {
    console.log("app is running on port 8899s");
});