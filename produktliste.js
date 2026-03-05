const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const pricesbtn = document.querySelector("#sorterPris");
const filteredmen = document.querySelector("#sortermaend");

console.log(pricesbtn);

const listURL = "https://kea-alt-del.dk/t7/api/products?category=" + category;
const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(listURL).then((res) =>
    res.json().then((products) => {
      allProducts = products;
      showProducts(products);
    }),
  );
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
     <article class="product">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1" />
                 <h3>${product.productdisplayname}</h3>
                <p class="price">Price: ${product.price} kr.</p>
                <p class="price">Brand: ${product.brandname}</p>
                <p class="price">Stock: ${product.soldout}</p>
                <p class="discount ">${product.discount}%</p>
                <a href="produkt.html?id=${product.id}"class="btn">Read More</a>
            </article>
    `;
  });
}

getProducts();

pricesbtn.addEventListener("click", sorterPris);

function sorterPris() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
  console.log("tekst");
}

getProducts();

function sortermaend(targetGender) {
  console.log("tekst");

  const filtered = allProducts.filter((product) => (product.gender || "").toLowerCase() === targetGender.toLowerCase());

  showProducts(filtered);
}

filteredmen.addEventListener("click", () => sortermaend("Men"));
