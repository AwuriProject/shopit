exports.getAccount = (req, res, next) =>{
    res.render('account/account', {
        pageTitle: 'My Account'
    })
}

exports.getOrder = (req, res, next) => {
    res.render('account/order', {
        pageTitle: 'Order'
    })
}

exports.getOrderDetail = (req, res, next) => {
    res.render('account/order-detail', {
        pageTitle: 'Order Details'
    })
}