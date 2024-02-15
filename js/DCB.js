const $$$ = document.querySelector.bind(document);
const $$$$ = document.querySelectorAll.bind(document);

const horizontals = $$$$(".horizontal-item");
const products = $$$$(".product-detail");

horizontals.forEach((tab, index) => {
  const product = products[index];

  tab.onclick = function () {
    $(".horizontal-item.actions").classList.remove("actions");
    $(".product-detail.actions").classList.remove("actions");

    this.classList.add("actions");
    product.classList.add("actions");
  };
});
