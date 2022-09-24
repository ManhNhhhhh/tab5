// kha bao module express framework
const express = require("express");
const app = express();
// khai bao module path => de set duong dan thu muc chua vie
const path = require ("path");
// set thu muc chua view
const port = process.env.port ||3000
app.set("views", path.join(__dirname, "views"));

// set view engine (template engine)
// => giup go code cua back-end ngay trong front-end de hon 
// hbs: handle bar => neu ung view engine khac thi thay doi gia tri nay 
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
})
// vi du
app.get("/mobile", (req, res)=>{
    res.render("mobile");
});
// listen port de chay server 
app.listen(port);