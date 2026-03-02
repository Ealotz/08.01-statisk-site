const listURL = "https://kea-alt-del.dk/t7/api/categories";
const listContainer = document.querySelector(".selection");

function getCategories() {
  fetch(listURL).then((res) => res.json().then((categories) => showCategories(categories)));
}

function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `


  <a href="produktliste.html?category=${category.category}" class="category">
 ${category.category}</a>


    `;
  });
}

getCategories();
