// Себетке өнімді қосу
document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".new-p-cart-btn");

  cartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productBox = btn.closest(".new-product-box");
      const title = productBox.querySelector(".new-product-title").textContent;
      const price = productBox.querySelector("span").textContent;
      const image = productBox.querySelector("img").getAttribute("src");

      const product = {
        title: title,
        price: price,
        image: image
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Өнім себетке қосылды!");
    });
  });
});
