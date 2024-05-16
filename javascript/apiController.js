  function saveArtistDetails(name, data) {
    let artistPaintings = data;
    // details = data;
    // for (let data of paintings) {
    //   artistPaintings.push(data);
    // }
    console.log(artistPaintings);
    let artistsDetails = {
      "artistName": name,
      "artistDetails": artistPaintings
    };

  console.log(artistsDetails);

  fetch("https://retoolapi.dev/j3UFnr/vincentPaintings",
    {
      "method": "POST",
      "body": JSON.stringify(artistsDetails),
      "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })

    .then((response) => {

      if (response && response.ok) {
        alert('sucess');
        return response.json();

      }
    })
   }


function getArtistDetails(idNum, index) {
  let getLink = "https://retoolapi.dev/ZGkFby/artistDetails/" + idNum;
  fetch(getLink,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        console.log(response.json);
        return response.json();
      }
    })
    .then((data) =>
      document.getElementById('paintingDetails').innerHTML = data.artistPaintings[index])
};

// API for products

let productAPIUrl = "https://retoolapi.dev/pbgccR/products";
let cartURL = "https://retoolapi.dev/jiy1tr/cart";
function getProducts() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      // productsAll(data);
      displayFavorites(data);
    })
}

function getProductsMain() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      productsAll(data);
      // displayFavorites(data);
    })
}
getProductsMain();

function getProductsStationery() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      categorizeStationery(data);
      // displayFavorites(data);
    })
}

function getProductsPosters() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      categorizePosters(data);
      // displayFavorites(data);
    })
}

function getProductsStickers() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      categorizeStickers(data);
      // displayFavorites(data);
    })
}

function getProductsCeramic() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      categorizeCeramic(data);
      // displayFavorites(data);
    })
}

function getProductsFancy() {
  fetch(productAPIUrl,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      categorizeFancy(data);
    })
}

function updateProducts(isfav, id, price, category, name, image) {
  let updateColor = {
      "image": image,
      "name": name,
      "category": category,
      "pricePaise": price,
      "redRWhite": isfav
  }
  fetch(productAPIUrl + "/" + id,
    {
      "method": "PUT",  
      "body": JSON.stringify(updateColor),
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
}

function saveToCart(image, name, price) {
    let cartItem = {
      "image": image,
      "name": name,
      "pricePaise": price,
      "deliveryOptionId": '1'
    };

  fetch(cartURL,
    {
      "method": "POST",
      "body": JSON.stringify(cartItem),
      "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })

    .then((response) => {

      if (response && response.ok) {
        alert('Item Added to Cart');
        return response.json();
      }
    })
}

function getCartItems() {
  fetch(cartURL,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      cartCheckout(data);
    })
}

function deleteCartItem(id) {
  fetch(cartURL + "/" + id,
    {
      "method": "DELETE",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
}

function updateDOId(id, name, image, price, deliveryOptionId) {
  let updateDOId = {
      "image": image,
      "name": name,
      "pricePaise": price,
      "deliveryOptionId": deliveryOptionId
  }
  fetch(cartURL + "/" + id,
    {
      "method": "PUT",  
      "body": JSON.stringify(updateDOId),
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
}

function getCartForOrderSummary() {
  fetch(cartURL,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      orderSummary(data);
    })
}

function getCartForNotify() {
  fetch(cartURL,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      cartNotify(data);
    })
}

async function deleteAllFromCart(cartURL) {
  try {
    const response = await fetch(cartURL);
    const data = await response.json();
    for (const item of data) {
      await fetch(cartURL + '/' + item.id, {
        "method": 'DELETE',
        "headers": {"content-type": "application/json; charset=UTF-8"}
      });
    }
    alert('Your Order has been placed!');
    window.location.href = "./tQPurchase.html"
  }
 catch (error) {
  console.error('Error:', error);
 } 
}