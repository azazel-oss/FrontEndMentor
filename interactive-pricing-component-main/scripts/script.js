let pageViewsElement = document.getElementById("pageviews-value");
let amountElement = document.getElementById("amount-value");
let sliderElement = document.getElementById("range");
let toggleElement = document.getElementById("toggle-button-value");
let durationElement = document.getElementById("duration");
let isDiscountSelected;

let amountValue = 0;

function valuesChange() {
  switch (sliderElement.value) {
    case "1":
      pageViewsElement.innerText = "10K";
      amountValue = 8;
      break;

    case "2":
      pageViewsElement.innerText = "50K";
      amountValue = 12;
      break;
    case "3":
      pageViewsElement.innerText = "100K";
      amountValue = 16;
      break;
    case "4":
      pageViewsElement.innerText = "500K";
      amountValue = 24;
      break;
    case "5":
      pageViewsElement.innerText = "1M";
      amountValue = 36;
      break;
    default:
      break;
  }
  if (isDiscountSelected) {
    amountValue *= 0.75;
    amountValue *= 12;
    durationElement.innerText = " /year";
  } else {
    durationElement.innerText = " /month";
  }
  amountElement.innerText = "$" + amountValue + ".00";
}

toggleElement.addEventListener("change", () => {
  isDiscountSelected = toggleElement.checked;

  valuesChange();
});

sliderElement.addEventListener("input", () => {
  valuesChange();
});
