const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `

    <div class="produktbillede" id="productImage">
  <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Produkt 2" />
  </div>
  
   <div class="produkttekst">

  <h3 class="nike">${data.productdisplayname}</h3>
            <h4>${data.brandname}</h4>

            <div class="farve">
                <p class="overskift">Season:</p>
                <p class="svar">${data.season}</p>
             </div>

            <div class="farve">
                <p class="overskift">Inventory Nummer:</p>
                <p class="svar">${data.id}</p>
            </div>

            <div class="farve">
                <p class="overskift">Price:</p>
                <p class="svar">${data.price} kr.</p>
            </div>


            <div class="farve">
            <p class="overskift">Stock:</p>
             <p class="svar">${data.soldout}</p>
            </div>

            <button class="basket">Add to Basket</button>

            </div>
  `;
}

getData();
