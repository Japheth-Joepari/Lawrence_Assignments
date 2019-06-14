let name = prompt('Full Name','');
let fname = document.getElementById('inp')
console.log(fname)
fname.innerHTML = `welcome ${name}`;

let input1 = document.querySelector('#name')
let input2 = document.querySelector('#num')
let input3 = document.querySelector('#address')
let addToCart = document.querySelector('#btn1')
let removeFromCart = document.querySelector('#btn2')

let products = []
addToCart.addEventListener('click',(e)=>{
let product = {
    'Product' : input1.value,
    'Price' : input2.value,
    'Delivery_Adress' : input3.value
}
products.push(product)
localStorage.setItem('User_Products',JSON.stringify(products))
console.log(products)
e.preventDefault()
} ) 

removeFromCart.addEventListener('click',(e)=>{
    localStorage.removeItem()
})

function myFunction() {
      location.replace("file:///home/mrphython/Documents/Web_Development/chibykes%20assignment/message.html")
    }

    function myFunction1() {
      alert('Good-bye') 
      location.replace("file:///home/mrphython/Documents/Web_Development/chibykes%20assignment/chat.html")
    }
    
    
    function myFunction2() {
      location.replace("file:///home/mrphython/Documents/Web_Development/chibykes%20assignment/message.html")
    }
    


