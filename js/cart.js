/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.querySelector('#cart');
table.addEventListener('click', removeItemFromCart);
let cart;
const headerImage = document.createElement('th');
headerImage.textContent = 'Picture';
document.querySelector('#cart').firstElementChild.firstElementChild.appendChild(headerImage);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);



}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector('#cart').firstElementChild.nextElementSibling.textContent = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  if (localStorage.cart) {
    const LocalstorageItems = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < LocalstorageItems.length; i++) {
      const trBody = document.createElement('tr');
      const tdBodyRemove = document.createElement('td');
      tdBodyRemove.innerHTML = `<a class='delete' id=${i}>X</a>`;
      trBody.appendChild(tdBodyRemove);
      const tdBodyQuntity = document.createElement('td');
      tdBodyQuntity.textContent = LocalstorageItems[i].quantity;
      trBody.appendChild(tdBodyQuntity);
      const tdBodyName = document.createElement('td');
      tdBodyName.textContent = LocalstorageItems[i].product.name;
      trBody.appendChild(tdBodyName);
      const tdBodyimg = document.createElement('td');
      tdBodyimg.innerHTML = `<img src='${LocalstorageItems[i].product.filePath}'/>`;
      trBody.appendChild(tdBodyimg);
      document.querySelector('#cart').firstElementChild.nextElementSibling.appendChild(trBody);

    }
    document.querySelector('#itemCount').textContent = ` (${cart.items.length})`;
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  if (event.target.matches('.delete')) {
    cart.items.splice(event.target.id, 1);
    localStorage.setItem('cart', JSON.stringify(cart.items));
    renderCart();
  }

}

// This will initialize the page and draw the cart on screen
renderCart();
