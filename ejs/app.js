const express = require('express')
const app =  express()
const port = process.env.PORT || 3000
const web = require('./routes/web.js')

// set tej 
app.set('view engine', 'ejs')



// load routes 
app.use('/',web)




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})