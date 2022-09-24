//khai báo module express framework
const express = require("express");
const app = express();
//khai báo module path
const path = require("path");
//Khai báo port
const port = process.env.PORT || 3000;
//set đường dẫn thư mục chứa view
app.set("views", path.join(__dirname, "views"));
//set view engine (template engine)
//=> Giúp gõ code của back-end ngay trong font-end dễ dàng hơn
//hbs: handle bar => nếu dùng view engine khác thì thay đổi giấ trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/mobile", (req, res) => {
    res.render("mobile")
})

app.get("/laptop", (req, res) => {
    res.render("laptop");
})
//Listen port để chạy server
app.listen(port);