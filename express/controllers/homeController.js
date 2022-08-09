
const path = require('path')

const homeController = (req, res) => {
  // res.send("Home Page");
  // res.sendFile(path.join(__dirname,'../views','index.html'))
  res.render('index')
};

module.exports = {homeController};
