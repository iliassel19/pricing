const pricingBtn = document.querySelector(".pricing__cta");
const pricingBtnCircle = document.querySelector(".pricing__cta-circle");

const priceTextAnnaly = document.querySelectorAll(".card__price-annualy");
const priceTextMonthly = document.querySelectorAll(".card__price-monthly");

const monthlyPriceArr = [19.99, 24.99, 39.99];

pricingBtn.addEventListener("click", function (e) {
  const btn = e.target.closest(".pricing__cta");
  if (!btn) return;

  pricingBtnCircle.classList.toggle("active");

  priceTextAnnaly.forEach((price) =>
    price.classList.toggle("card__price-text_abs")
  );
  priceTextMonthly.forEach((price) =>
    price.classList.toggle("card__price-text_abs")
  );
});
