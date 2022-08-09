const path = require('path')


const aboutController = (req, res) => {
  // res.send("About Page");
  res.sendFile(path.join(__dirname,'../views/about.html'))
  
};

module.exports = {aboutController};
  