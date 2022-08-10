const homeController = (req,res) => {
    const data = {
        'name':'deepak'
    }
    res.render('index',data)
}

module.exports = {homeController}