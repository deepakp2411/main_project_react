
const path = require('path')

const homeController = (req, res) => {
  // res.send("Home Page");
  res.sendFile(path.join(__dirname,'../views','index.html'))
};

module.exports = {homeController};
