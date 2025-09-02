exports.getErrorPage = (req, res, next) =>{
    res.render('error', {
        pageTitle: 'Page Not Found'
    })
}