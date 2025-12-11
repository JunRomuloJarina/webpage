function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

let cart = [];

function addToCart(productName) {
  cart.push(productName);
  updateCartList();
}

function updateCartList() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.padding = "5px 0";
    li.innerHTML = `
      ${item}
      <span style="color:red; cursor:pointer;" onclick="removeFromCart(${index})">✖</span>
    `;
    cartList.appendChild(li);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartList();
}

const cartBtn = document.getElementById("cart-btn");
const cartPanel = document.getElementById("cartPanel");

function positionCartPanel() {
  const rect = cartBtn.getBoundingClientRect();
  cartPanel.style.top = rect.bottom + "px";
  cartPanel.style.left = rect.left + "px";
}

cartBtn.addEventListener("click", () => {
  if (cartPanel.style.display === "block") {
    cartPanel.style.display = "none";
    window.removeEventListener("scroll", positionCartPanel);
    return;
  }

  cartPanel.style.display = "block";
  positionCartPanel();
  window.addEventListener("scroll", positionCartPanel);
});

window.addEventListener("resize", () => {
  if (cartPanel.style.display === "block") {
    positionCartPanel();
  }
});

const addButtons = document.querySelectorAll(".add-to-cart-btn");

addButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const productName =
      btn.parentElement.querySelector(".product-name").innerText;
    addToCart(productName);
  });
});
