const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
     <article class="product">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1" />
                 <h3>${product.productdisplayname}</h3>
                <p class="price">Price: ${product.price} kr.</p>
                <p class="price">Brand: ${product.brandname}</p>
                <p class="price">Stock: ${product.soldout}</p>
                <a href="produkt.html" class="btn">Add to Basket</a>
            </article>
    `;
  });
}

getProducts();
