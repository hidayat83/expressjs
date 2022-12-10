const router = require("express").Router();
const http = require("http");
const fs = require('fs')


router.get("/", (req, res) => {
  res.send({
    status: "Succesfully",
    message: "Welcome To Laptop Store",
  });
});
router.get('/home', (req, res)=>{
	fs.readFile('Home.html', function (err, data) {
				res.writeHead(200, { 'Content-type': 'text/html' });
				res.write(data);
				res.end()
			})
})
router.get("/Harga", (req, res) => {
  res.send([
    {
      Merk: "Laptop Asus",
      type: "Gaming",
      price: "15 juta",
    },
    { Merk: "Laptop Asus", type: "Gaming", price: "15 juta" },
  ]);
});
// http.createServer('/home',function (req, res) {
// 	fs.readFile('Home.html', function (err, data) {
// 		res.writeHead(200, { 'Content-type': 'text/html' });
// 		res.write(data);
// 		res.end()
// 	})
// })

module.exports = router;
