//when the page loads append categories to categories container
//add an event listener when the category is clicked a dropdown of subcategories for that category will load
function getCategories() {
  fetch('https://www.dnd5eapi.co/api/')
  .then(resp => resp.json())
  .then(categories => console.log(categories))
}


document.addEventListener('DOMContentLoaded', () => {
  getCategories();
})