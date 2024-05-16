let totalProductPrice = 0;
let itemCount = 0;
let itemShippingPrice = 0;
let itemPPlusShippingP = 0;

function orderSummary(products) {
  products.forEach((item) => {
    totalProductPrice += Number(item.pricePaise);
    itemCount++
    itemShippingPrice += deliveryOptions[item.deliveryOptionId - 1].pricePaise;
  });
  console.log(totalProductPrice);
  console.log(itemCount);
  console.log(itemShippingPrice);
  itemPPlusShippingP = totalProductPrice + itemShippingPrice
  let tenPerTax = itemPPlusShippingP * 0.10
  let totalWithTax = itemPPlusShippingP + (tenPerTax);
  console.log(itemPPlusShippingP);
  console.log(tenPerTax);
  console.log(totalWithTax);

  document.getElementById('itemCount').innerHTML = `Items (${itemCount}):`;
  document.getElementById('jsItemsTotal').innerHTML = `&#8377;${(totalProductPrice / 100).toFixed(2)}`;
  document.getElementById('jsShippingPrice').innerHTML = `&#8377;${(itemShippingPrice / 100).toFixed(2)}`;
  document.getElementById('jsTotalBeforeTax').innerHTML = `&#8377;${(itemPPlusShippingP / 100).toFixed(2)}`;
  document.getElementById('jsTaxPrice').innerHTML = `&#8377;${(tenPerTax / 100).toFixed(2)}`;
  document.getElementById('jsGrandTotal').innerHTML = `&#8377;${(totalWithTax / 100).toFixed(2)}`;
};