exports.getLoginPage = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login'
    })
}

exports.postLoginPage = (req, res, next) =>{
    res.render('auth/logintwo', {
        pageTitle: 'Login'
    })
}

exports.postLoginPageTwo = (req, res, next) => {
    res.render('account/account', {
        pageTitle: 'Account'
    })
}

exports.getSigninPage = (req, res, next) => {
    console.log('working route')
      res.render('auth/signin', {
        pageTitle: 'Sign In Page'
    })
}

exports.postSigninPage = (req, res, next) => {
    res.render('auth/personal', {
        pageTitle: 'Personal Information'
    })
}

exports.postPersonalPage = (req, res, next) =>{
    res.render('auth/personaltwo', {
        pageTitle: 'Personl Information'
    })
}

exports.postVerifyPage = (req, res, next) => {
    res.render('auth/verify', {
        pageTitle: 'Verification Page'
    })
}

exports.getVerify = (req, res, next) => {
    res.render('auth/success', {
        pageTitle: 'Success Page'
    })
}