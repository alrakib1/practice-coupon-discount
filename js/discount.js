document.getElementById("btn-apply").addEventListener("click", function () {
  const inputText = document.getElementById("input-field");
  const inputTextString = inputText.value;
  inputText.value = "";
  if (inputTextString !== "dis30") {
    alert("Please Write the correct Cuppon");
    return;
  }
  const priceTotal = document.getElementById("price-total");
  const priceTotalString = priceTotal.innerText;
  const priceTotalValue = parseFloat(priceTotalString);
  const discountValue = (priceTotalValue * (100 - 30)) / 100;

  const discountPrice = document.getElementById("discount-price");
  discountPrice.innerText = discountValue;
});
