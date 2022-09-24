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
    let name  = "Cloud Computing";//String
    let code = 1644;//nt
    //pass dữ liệu từ back-end sang front-end
    //cú pháp: name (data) : value (data)
    //gửi dữ liệu là value và nhận với tên là name
    res.render("index", {name: name, ma: code, ky: "Fall 2022"});
})

app.get("/mobile", (req, res) => {
    let list = ["Iphone", "SamSung", "Oppo", "Huawei"];

    res.render("mobile", {mobile: list})
})

app.get("/laptop", (req, res) => {
    let list = ["Acer", "Macbook", "Huawei", "Asus", "Lenovo", "Dell"];
    res.render("laptop", {laptop: list});
})
//Listen port để chạy server
app.listen(port);