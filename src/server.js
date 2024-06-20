
require('dotenv').config()
const express = require('express') //import express
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express() // tạo express application
const port = process.env.PORT||8082 // init port
const hostname  = process.env.HOST_NAME

//config template engine
configViewEngine(app);
//Khai bao route
app.use('/',webRoutes);

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname , () => {
        console.log(`Example app listening on port ${port}`)
})
