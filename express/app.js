const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const student = require('./routes/student.js')

app.use('/student',student)



app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
