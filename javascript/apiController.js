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
        // console.log(response.json);
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

// var apiUrl = "https://retoolapi.dev/hdta2X/favoritesList";
// function addToFavorites(image, name, category, price, productId, isfav) {

//   let prodImg = image;
//   let prodName = name;
//   let prodTag = category;
//   let prodPrice = price;
//   let prodId = productId;
//   let redRWhite = isfav;

//   // console.log(prodImg);
//   // console.log(prodName);
//   // console.log(prodTag);
//   console.log(prodId);


//   let postFavorites = {
//     "image": prodImg,
//     "name": prodName,
//     "category": prodTag,
//     "pricePaise": prodPrice,
//     "prodId": prodId,
//     "redRWhite": redRWhite
//   }

//   fetch(apiUrl,
//     {
//       "method": "POST",
//       "body": JSON.stringify(postFavorites),
//       "headers": { "Content-Type": "application/json; charset=UTF-8" }
//     })

//     .then((response) => {

//       if (response && response.ok) {
//         // console.log(response.json);
//         alert('Item Added to Favorites!');
//         return response.json();

//       }
//     })
// };

// let favoritesData;
// let favoritesHTML = "";
// function getFavorites() {
//   // let getLink = "https://retoolapi.dev/hdta2X/favoritesList";
//   fetch(apiUrl,
//     {
//       "method": "GET",
//       "headers": { "content-type": "application/json; charset=UTF-8" }
//     })
//     .then((response) => {
//       if (response && response.ok) {
//         console.log(response.json);
//         return response.json();
//       }
//     })
//     .then((data) => {displayFavorites(data);})
// };
//     function displayFavorites(data){
//       favoritesData = data;
//       favoritesHTML = "";
//       favoritesData.forEach((product) => {
//       favoritesHTML += `<div id="productSlot" class="product-slot-div">
//       <div class="proimage-div"><img src="${product.image}"
//           style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
//       </div>
//       <div class="product-details">
//         <div class="product-title">${product.name}</div>
//         <div id="productCategory" class="product-category">${product.category}</div>
//         <div class="product-price">
//           <div style="display: flex; flex: 1;">MRP: &#8377;${(
//             product.pricePaise / 100
//           ).toFixed(2)}</div>
//           <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
//             product.pricePaise
//           }" data-product-category="${product.category}" data-product-image="${
//           product.image
//         }" data-product-name="${product.name}" class="js-add-favorites" fill="${
//           product.redRWhite
//         }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
//         </div>
//         <div class="buttons-div">
//           <div class="addtocart-div">
//             <button class="button-addtocart">Add To Cart</button>
//           </div>
//         </div>
//         </div>
//       </div>`
//         });
//         document.querySelector('.js-products-grid').innerHTML = favoritesHTML;
//         favoriteAction();        
//     }

    // function removeFavorite(productID) {
    //   // console.log(productID);
    //  fetch(apiUrl + "/" + productID, 
    //   {
    //     "method": "DELETE",
    //     "headers": { "content-type": "application/json; charset=UTF-8" },
        
    //   })
    //   .then((response) => {
    //     if (response && response.ok) {
    //       console.log(response.json);
    //       alert("removed from favorites sucessfully!");
    //       return response.json();
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }




// API for products

let productAPIUrl = "https://retoolapi.dev/pbgccR/products";
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
      // console.log(data);
      categorizeFancy(data);
      // displayFavorites(data);
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

