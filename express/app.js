const express = require('express');
const app = express();
const port = process.env.PORT || 8050;
const path = require('path')

const web  = require('./routes/web.js')

// setup ejs 

// app.set('views','./views')

app.set('view engine', 'ejs')

// <--------------------------------------------------------------------------------------------->

// static files 

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))

// use single file 



app.use('/',web)


// const student = require('./routes/student.js')

// app.use('/student',student)



app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
