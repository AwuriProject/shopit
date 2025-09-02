const arrowDown = document.getElementById('arrowDown');
const dropdownContent = document.querySelector('.dropdown__content')
console.log(dropdownContent)

arrowDown.addEventListener('mouseover', () =>{
    console.log('Mouse moved!')
    dropdownContent.classList.add('show')
})

const prodOrder = document.querySelector('.things__order')
const prodDetail = document.getElementById('prod__detail')
const productDetail = document.querySelector('.product__detail')
const returnArrow = document.querySelector('.return__back')
const prodHistory = document.querySelector('.prod__history')
const orderHistory = document.querySelector('.order__history')
const acctView = document.querySelector('.account__overview')

prodDetail.addEventListener('click', () =>{
    console.log('product')
    acctView.classList.add('hidden')
    productDetail.classList.remove('hidden')
})
returnArrow.addEventListener('click', () =>{
    prodOrder.classList.remove('hidden')
    productDetail.classList.add('hidden')
})
prodHistory.addEventListener('click', () =>{
    orderHistory.classList.remove('hidden')
    productDetail.classList.add('hidden')
    acctView.classList.add('hidden')
})