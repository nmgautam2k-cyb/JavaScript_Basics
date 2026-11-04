const form = document.getElementById("form");
const productname = document.getElementById("productname");
const producturl = document.getElementById("producturl");
const productprice = document.getElementById("productprice");
const productContainer = document.getElementById("productContainer");

function products(name, url, price) {
  this.name = name;
  this.url = url;
  this.price = price;
}

const p1 = new products(
  "Laptop",
  "https://laptopvoyager.com/wp-content/uploads/2025/03/hp-laptop-15-6-review.webp",
  40000,
);
const p2 = new products(
  "Mobile",
  "https://img.freepik.com/premium-photo/smartphone-mobile-phone-product-mockup-display-advertising-rendering-mockup-wallpaper-background_327903-1499401.jpg",
  30000,
);

console.log(p1);
console.log(p2);

let product_array =[];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = productname.value;
  const url = producturl.value;
  const price = productprice.value;

  const newproducts = new products(name, url, price);

  product_array.push(newproducts);

  console.log(product_array);
  displayproducts();
});

function displayproducts() {
  productContainer.innerHTML = " ";
  product_array.forEach((prod, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `<div class="card p-3 mt-4 b-light bg-light">
    <img src="${prod.url}" class="card-img-top rounded" height="400">
    <div>
    <h5 class="card-title display"><div id="productname_card" class="mt-3">Product Name: ${prod.name} </div>
    <p class="card-text"><div id="productprice_card">Product Price: ${prod.price}</p>
    <button class="btn btn-primary mt-3">Buy Now</button>
    </div>
    </div>`;
    productContainer.appendChild(card);
  });
}
