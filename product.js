const productData = {
  Navn: "Lyseblå Tshirt",
  Brand: "NiCe",
  Farve: "Lyseblå",
  Pris: "299 kr.",
  stock: "På lager",
  billede: "https://kea-alt-del.dk/t7/images/webp/640/1562.webp",
};

document.querySelector("#productName").innerHTML = productData.produktnavn;
document.querySelector("#productBrand").innerHTML = productData.brandnavn;
document.querySelector("#productFarve").innerHTML = productData.produktfarve;
document.querySelector("#productPris").innerHTML = productData.pris + " kr.";
document.querySelector("#productImage").innerHTML = productData.image;

if (productData.soldout === 1) {
  document.querySelector("#productStock").textContent = "Udsolgt";
} else {
  document.querySelector("#productStock").textContent = "På lager";
}
