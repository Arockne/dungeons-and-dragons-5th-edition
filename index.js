//when the page loads append categories to categories container
//add an event listener when the category is clicked a dropdown of subcategories for that category will load
function getCategories() {
  fetch('https://www.dnd5eapi.co/ai/')
  .then(resp => {
    console.log(resp)
    if (!resp.ok) throw resp
    return resp.json();
  })
  .then(categories => console.log(categories))
  .catch(err => {
    const message = `Error type: (${err.type}) Fetch from: (${err.url}) Status: (${err.status})`
    document.querySelector('body').textContent = message;
  })
}


document.addEventListener('DOMContentLoaded', () => {
  getCategories();
})

//REQUIREMENTS
//app must use HTML/CSS/JS frontend
  //accesses data from a public API
//entire app must run on a single page
  //no redirects - one html page
//3 seperate event listeners
//some interactivity is required
//keep code DRY