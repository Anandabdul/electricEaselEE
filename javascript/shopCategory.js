let nav = document.getElementById("categoryBar");

function showCategories() {
  nav.style.left = "80px";
  nav.style.transition = "0.40s";
}

function hideCategories() {
  nav.style.left = "-160px";
}

// const products = [
  // {
  //   prodId: "15001",
  //   image: "./Assets/images/leoart poster one 4.jpg",
  //   name: "Leo Movie Poster",
  //   category: "#posters",
  //   pricePaise: 50000,
  //   redRWhite: "red"
  // },
//   {
//     prodId: "15002",
//     image: "./Assets/images/diy-ceramic-planter.jpg",
//     name: "Ceramic Planters (4)",
//     category: "#ceramic",
//     pricePaise: 120000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15003",
//     image: "./Assets/images/christmas-stickerpack.webp",
//     name: "Christmas Stickers",
//     category: "#stickers",
//     pricePaise: 30000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15004",
//     image: "./Assets/images/image-content-detail-polychromos-120.webp",
//     name: "Polychromos 120",
//     category: "#stationery",
//     pricePaise: 2535000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15005",
//     image: "./Assets/images/Brustro-2.jpg",
//     name: "Brustro A5 Note",
//     category: "#stationery",
//     pricePaise: 53495,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15006",
//     image: "./Assets/images/shopPics/faberCastellPen.jpeg",
//     name: "Artist Pen Set",
//     category: "#stationery",
//     pricePaise: 55000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15007",
//     image: "./Assets/images/shopPics/batmanPoster.jpg",
//     name: "Batman Poster",
//     category: "#posters",
//     pricePaise: 40000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15008",
//     image: "./Assets/images/shopPics/stoneWindchime.jpeg",
//     name: "Stone Wind Chime",
//     category: "#fancy",
//     pricePaise: 89995,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15009",
//     image: "./Assets/images/shopPics/codeSticker.jpg",
//     name: "Code-It Sticker pack",
//     category: "#stickers",
//     pricePaise: 33000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15010",
//     image: "./Assets/images/shopPics/incenseBurner.jpg",
//     name: "Incense Burner",
//     category: "#ceramic",
//     pricePaise: 68000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15011",
//     image: "./Assets/images/shopPics/vincentPoster.jpg",
//     name: "Vincent Poster",
//     category: "#posters",
//     pricePaise: 27080,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15012",
//     image: "./Assets/images/shopPics/tapeBangle.jpg",
//     name: "Tape Bracelet",
//     category: "#fancy",
//     pricePaise: 115000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15013",
//     image: "./Assets/images/shopPics/catPlates.jpg",
//     name: "Kitty Cat Plate Set",
//     category: "#ceramic",
//     pricePaise: 146000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15014",
//     image: "./Assets/images/shopPics/twoSetSticker.jpg",
//     name: "Two Sticker Set",
//     category: "#stickers",
//     pricePaise: 60000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15015",
//     image: "./Assets/images/shopPics/catPoster.jpg",
//     name: "Night Cat Poster",
//     category: "#posters",
//     pricePaise: 37589,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15016",
//     image: "./Assets/images/shopPics/badges.jpg",
//     name: "Cute Badges (10)",
//     category: "#fancy",
//     pricePaise: 39000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15017",
//     image: "./Assets/images/shopPics/candleHolder.jpg",
//     name: "Candle Holder",
//     category: "#ceramic",
//     pricePaise: 1250000,
//     redRWhite: "red"
//   },
//   {
//     prodId: "15018",
//     image: "./Assets/images/shopPics/skullSticker.jpg",
//     name: "Love&Skulls Sticker",
//     category: "#stickers",
//     pricePaise: 39996,
//     redRWhite: "red"
//   }
// ];

let productsHTML = "";
function productsAll(products) {
  productsHTML = "";
  products.forEach((product) => {
    productsHTML += `<div id="productSlot" class="product-slot-div">
  <div class="proimage-div"><img src="${product.image}"
      style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
  </div>
  <div class="product-details">
    <div class="product-title">${product.name}</div>
    <div id="productCategory" class="product-category">${product.category}</div>
    <div class="product-price">
      <div style="display: flex; flex: 1;">MRP: &#8377;${(
        product.pricePaise / 100
      ).toFixed(2)}</div>
      <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
        product.pricePaise
      }" data-product-category="${product.category}" data-product-image="${
      product.image
    }" data-product-name="${product.name}" class="js-add-favorites" fill="${
      product.redRWhite
    }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
    </div>
    <div class="buttons-div">
      <div class="addtocart-div">
        <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
      </div>
    </div>
    </div>
  </div>`;
  });
  document.querySelector(".js-products-grid").innerHTML = productsHTML;
  favoriteAction();
  cartAction();
};

let categorizeStationeryHTML = "";
function categorizeStationery(products) {
  categorizeStationeryHTML = "";
  products.forEach((product) => {
    if (product.category === "#stationery") {
      categorizeStationeryHTML += `<div id="productSlot" class="product-slot-div">
      <div class="proimage-div"><img src="${product.image}"
          style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
      </div>
      <div class="product-details">
        <div class="product-title">${product.name}</div>
        <div id="productCategory" class="product-category">${product.category}</div>
        <div class="product-price">
          <div style="display: flex; flex: 1;">MRP: &#8377;${(
            product.pricePaise / 100
          ).toFixed(2)}</div>
          <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
            product.pricePaise
          }" data-product-category="${product.category}" data-product-image="${
          product.image
        }" data-product-name="${product.name}" class="js-add-favorites" fill="${
          product.redRWhite
        }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
        </div>
        <div class="buttons-div">
        <div class="addtocart-div">
        <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
      </div>
        </div>
        </div>
      </div>`;
    }
  });
  document.querySelector(".js-products-grid").innerHTML =
    categorizeStationeryHTML;
  favoriteAction();
  cartAction();
}

let categorizePostersHTML = "";
function categorizePosters(products) {
  categorizePostersHTML = "";
  products.forEach((product) => {
    if (product.category === "#posters") {
      categorizePostersHTML += `<div id="productSlot" class="product-slot-div">
      <div class="proimage-div"><img src="${product.image}"
          style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
      </div>
      <div class="product-details">
        <div class="product-title">${product.name}</div>
        <div id="productCategory" class="product-category">${product.category}</div>
        <div class="product-price">
          <div style="display: flex; flex: 1;">MRP: &#8377;${(
            product.pricePaise / 100
          ).toFixed(2)}</div>
          <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
            product.pricePaise
          }" data-product-category="${product.category}" data-product-image="${
          product.image
        }" data-product-name="${product.name}" class="js-add-favorites" fill="${
          product.redRWhite
        }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
        </div>
        <div class="buttons-div">
        <div class="addtocart-div">
        <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
      </div>
        </div>
        </div>
      </div>`
    }
  });
  document.querySelector(".js-products-grid").innerHTML = categorizePostersHTML;
  favoriteAction();
  cartAction();
}

let categorizeStickersHTML = "";
function categorizeStickers(products) {
  categorizeStickersHTML = "";
  products.forEach((product) => {
    if (product.category === "#stickers") {
      categorizeStickersHTML += `<div id="productSlot" class="product-slot-div">
      <div class="proimage-div"><img src="${product.image}"
          style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
      </div>
      <div class="product-details">
        <div class="product-title">${product.name}</div>
        <div id="productCategory" class="product-category">${product.category}</div>
        <div class="product-price">
          <div style="display: flex; flex: 1;">MRP: &#8377;${(
            product.pricePaise / 100
          ).toFixed(2)}</div>
          <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
            product.pricePaise
          }" data-product-category="${product.category}" data-product-image="${
          product.image
        }" data-product-name="${product.name}" class="js-add-favorites" fill="${
          product.redRWhite
        }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
        </div>
        <div class="buttons-div">
        <div class="addtocart-div">
        <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
      </div>
        </div>
        </div>
      </div>`
    }
  });
  document.querySelector(".js-products-grid").innerHTML =
    categorizeStickersHTML;
  favoriteAction();
  cartAction();
}

let categorizeCeramicHTML = "";
function categorizeCeramic(products) {
  categorizeCeramicHTML = "";
  products.forEach((product) => {
    if (product.category === "#ceramic") {
      categorizeCeramicHTML += `<div id="productSlot" class="product-slot-div">
      <div class="proimage-div"><img src="${product.image}"
          style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
      </div>
      <div class="product-details">
        <div class="product-title">${product.name}</div>
        <div id="productCategory" class="product-category">${product.category}</div>
        <div class="product-price">
          <div style="display: flex; flex: 1;">MRP: &#8377;${(
            product.pricePaise / 100
          ).toFixed(2)}</div>
          <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
            product.pricePaise
          }" data-product-category="${product.category}" data-product-image="${
          product.image
        }" data-product-name="${product.name}" class="js-add-favorites" fill="${
          product.redRWhite
        }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
        </div>
        <div class="buttons-div">
        <div class="addtocart-div">
        <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
      </div>
        </div>
        </div>
      </div>`
    }
  });
  document.querySelector(".js-products-grid").innerHTML = categorizeCeramicHTML;
  favoriteAction();
  cartAction();
}

let categorizeFancyHTML = "";
function categorizeFancy(products) {
  categorizeFancyHTML = "";
  products.forEach((product) => {
    if (product.category === "#fancy") {
      categorizeFancyHTML += `<div id="productSlot" class="product-slot-div">
      <div class="proimage-div"><img src="${product.image}"
          style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
      </div>
      <div class="product-details">
        <div class="product-title">${product.name}</div>
        <div id="productCategory" class="product-category">${product.category}</div>
        <div class="product-price">
          <div style="display: flex; flex: 1;">MRP: &#8377;${(
            product.pricePaise / 100
          ).toFixed(2)}</div>
          <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
            product.pricePaise
          }" data-product-category="${product.category}" data-product-image="${
          product.image
        }" data-product-name="${product.name}" class="js-add-favorites" fill="${
          product.redRWhite
        }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
        </div>
        <div class="buttons-div">
        <div class="addtocart-div">
        <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
      </div>
        </div>
        </div>
      </div>`
    }
  });
  document.querySelector(".js-products-grid").innerHTML = categorizeFancyHTML;
  favoriteAction();
  cartAction();
}

let displayFavoritesHTML = "";
function displayFavorites(products) {
  displayFavoritesHTML = "";
  products.forEach((product) => {
  if (product.redRWhite === "red") {
    displayFavoritesHTML += `<div id="productSlot" class="product-slot-div">
  <div class="proimage-div"><img src="${product.image}"
      style="height: 250px; width: 226px; object-fit: cover; border-top-left-radius: 10px; border-top-right-radius: 10px;">
  </div>
  <div class="product-details">
    <div class="product-title">${product.name}</div>
    <div id="productCategory" class="product-category">${product.category}</div>
    <div class="product-price">
      <div style="display: flex; flex: 1;">MRP: &#8377;${(
        product.pricePaise / 100
      ).toFixed(2)}</div>
      <div style="margin-right: 5px;"><svg data-product-id="${product.id}" data-product-prodId="${product.prodId}" data-product-isfav="${product.redRWhite}" data-product-price="${
        product.pricePaise
      }" data-product-category="${product.category}" data-product-image="${
      product.image
    }" data-product-name="${product.name}" class="js-add-favorites" fill="${
      product.redRWhite
    }" stroke="black" stroke-width="2px" width="24px" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/></svg></div>
    </div>
    <div class="buttons-div">
    <div class="addtocart-div">
    <button class="button-addtocart js-add-cart" data-product-image="${product.image}" data-product-name="${product.name}" data-product-price="${product.pricePaise}">Add To Cart</button>
  </div>
    </div>
    </div>
  </div>`;
    }
  });
  console.log(displayFavoritesHTML);
  document.querySelector(".js-products-grid").innerHTML = displayFavoritesHTML;
  favoriteAction();
  cartAction();
}

function favoriteAction() {
  document.querySelectorAll(".js-add-favorites").forEach((item) => {
    
    item.addEventListener("click", () => {
      const productImage = item.dataset.productImage;
      const productName = item.dataset.productName;
      const productCategory = item.dataset.productCategory;
      const productPrice = item.dataset.productPrice;
      const productID = item.dataset.productId;
      const isfav = item.dataset.productIsfav;

      if (isfav === "white") {
        item.style.fill = "red";
        updateProducts("red", productID, productPrice, productCategory, productName, productImage);
        alert("Item Added to Cart!");
      } else if (isfav === "red") {
        item.style.fill = "white";
        item.style.stroke = "black";
        updateProducts("white", productID, productPrice, productCategory, productName, productImage);
        alert("Item Removed from Cart!");
      }
    });
  });
};

function cartAction() {
 document.querySelectorAll('.js-add-cart').forEach((item) => {
  item.addEventListener("click", () => {
    const productImage = item.dataset.productImage;
    const productName = item.dataset.productName;
    const productPrice = item.dataset.productPrice;
    // console.log(productImage);
    // console.log(productName);
    // console.log(productPrice);
    saveToCart(productImage, productName, productPrice);
    itemCountNotify++;
  })
}) 
}

let itemCountNotify = 0;
function cartNotify(items) {
  items.forEach(() => {
    itemCountNotify ++;
  })
  document.getElementById('cartNotify').innerHTML = itemCountNotify;
}