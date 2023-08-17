document.getElementById("btn-apply").addEventListener("click", function () {
  // get input value
  const inputText = document.getElementById("input-field");
  const inputTextString = inputText.value;
  inputText.value = "";
  // check input value with coupon
  if (inputTextString !== "dis30") {
    alert("Please Write the correct Cuppon");
    return;
  }
  // get price
  const priceTotal = document.getElementById("price-total");
  const priceTotalString = priceTotal.innerText;
  const priceTotalValue = parseFloat(priceTotalString);
  // discount conversion calculation
  const discountValue = (priceTotalValue * (100 - 30)) / 100;
  // set new discounted price
  const discountPrice = document.getElementById("discount-price");
  discountPrice.innerText = discountValue;
});
