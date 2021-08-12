//when the page loads append categories to categories container
//add an event listener when the category is clicked a dropdown of subcategories for that category will load
function getCategories() {
  fetch('https://www.dnd5eapi.co/api/')
  .then(resp => {
    if (!resp.ok) throw resp
    return resp.json();
  })
  .then(handleCategories)
  .catch(err => {
    const message = `Error type: (${err.type}) Fetch from: (${err.url}) Status: (${err.status})`
    document.querySelector('body').textContent = message;
  })
}

function handleCategories(categories) {
  //convert object to an array of arrays
  //for each category
    //create a list element
      //label the li the current category
  //append the list element to the categories-container
  const categoriesArray = Object.entries(categories);
  categoriesArray.forEach(category => {
    const li = document.createElement('li');
    li.textContent = category[0].replace(/-/, ' ');
    li.className = category[0];
    document.querySelector('#categories-container').appendChild(li);
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