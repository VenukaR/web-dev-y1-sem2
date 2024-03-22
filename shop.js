//FLOATING BUTTON & the Catogories Tab
document.querySelector('.floating-button').addEventListener('click', function() {
    const element = document.querySelector('.products-title');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
  document.querySelector('.keyboard').addEventListener('click', function() {
    const element = document.querySelector('.title-image1');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
  document.querySelector('.guitar').addEventListener('click', function() {
    const element = document.querySelector('.title-image2');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
  document.querySelector('.drums').addEventListener('click', function() {
    const element = document.querySelector('.title-image3');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
  document.querySelector('.other').addEventListener('click', function() {
    const element = document.querySelector('.title-image4');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
   document.querySelector('.access').addEventListener('click', function() {
    const element = document.querySelector('.title-image5');
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
  
  

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', whenAddToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}



if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', whenAddToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


  function purchaseClicked() {
    const cartItems = document.querySelector('.cart-items');
    if (cartItems.children.length === 0) {
      alert('Your cart is empty. Please add items to cart before purchase.');
      return;
    }
  
    // Get the cart total and convert it to a number
    const cartTotal = parseFloat(document.querySelector('.cart-total-price').innerText.replace('$', ''));
  
    // Get the cart items
    const cartRows = cartItems.querySelectorAll('.cart-row');
  
    // Create an array to hold the cart items
    const cart = [];
  
    // Loop through each cart item and add it to the cart array
    cartRows.forEach(row => {
      const Item= row.querySelector('.cart-item-title').innerText;
      const Price = parseFloat(row.querySelector('.cart-price').innerText.replace('$', ''));
      const Quantity = parseInt(row.querySelector('.cart-quantity-input').value);
      cart.push({ Item, Price, Quantity });
    });
  
    // Add the cart and cart total to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', cartTotal);
    
    var cartTot = document.getElementsByClassName('cart-total-price')[0].innerText;
    var url = "payment.html?total=" + encodeURIComponent(cartTot);
    console.log(cartTot)
    window.location.href = url;
  }
  
//cart item removing 
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//quantity changer
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function whenAddToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(total)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
