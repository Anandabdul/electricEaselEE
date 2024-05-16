let cartHTML = "";
function cartCheckout(products) {
  products.forEach((product) => {
    const deliveryOptionId = product.deliveryOptionId;

    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });
    // console.log(deliveryOption);
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    cartHTML += `<div class="card w-75 pt-2 ps-3 my-3" style="height: 220px;">
  <div class="delivery-date" style="font-weight: bold;">
    Delivery date: ${dateString}
  </div>

  <div style="display: flex; align-items: center; justify-content: center;">
    <img style="width: 120px; flex: 1;" class="product-image pe-3"
      src="${product.image}">

    <div style="flex: 2;" class="d-flex flex-column">
      <div class="product-name">
        ${product.name}
      </div>
      <div class="product-price pb-1">
        &#8377;${(product.pricePaise / 100).toFixed(2)}
      </div>
      <div class="product-delete">
        <button class="btn btn-warning text-light js-delete-cart-item" data-product-id="${
          product.id
        }">
          Delete
        </button>
      </div>
    </div>

    <div style="flex: 2;" class="delivery-options d-flex flex-column">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      ${deliveryOptionHTML(product)}
    </div>
  </div>
</div>`;
  });
  document.querySelector(".order-summary").innerHTML = cartHTML;
  deleteFromCart();

  deliveryOptionAction();
}

function deliveryOptionHTML(product) {
  let html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");
    const priceString =
      deliveryOption.pricePaise === 0
        ? "FREE"
        : `&#8377;${(deliveryOption.pricePaise / 100).toFixed(2)} -`;

    const isChecked = deliveryOption.id === product.deliveryOptionId;

    html += `<div class="delivery-option d-flex js-delivery-option" data-product-id="${
      product.id
    }" data-product-price="${product.pricePaise}"
    data-product-image="${product.image}" data-product-name="${
      product.name
    }" data-product-deliveryoptionid="${deliveryOption.id}">
      <input type="radio" ${
        isChecked ? "Checked" : ""
      } class="delivery-option-input" name="delivery-option-${product.id}">
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
          ${priceString} Shipping
        </div>
      </div>
    </div>`;
  });
  return html;
}

function deleteFromCart() {
  document.querySelectorAll(".js-delete-cart-item").forEach((item) => {
    item.addEventListener("click", () => {
      const productId = item.dataset.productId;
      deleteCartItem(productId);
    });
  });
}

const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    pricePaise: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    pricePaise: 6000,
  },
  {
    id: "3",
    deliveryDays: 1,
    pricePaise: 12000,
  },
];

function deliveryOptionAction() {
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const {
        productId,
        productImage,
        productName,
        productPrice,
        productDeliveryoptionid,
      } = element.dataset;

      // console.log(productDeliveryoptionid);
      updateDOId(
        productId,
        productName,
        productImage,
        productPrice,
        productDeliveryoptionid
      );
    });
  });
}
