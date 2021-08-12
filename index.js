//when the page loads append categories to categories container
//add an event listener when the category is clicked a dropdown of subcategories for that category will load
function getHeadings() {
  fetch('https://www.dnd5eapi.co/api/')
  .then(resp => {
    if (!resp.ok) throw resp
    return resp.json();
  })
  .then(handleHeadings)
  .catch(err => {
    const message = `Error type: (${err.type}) Fetch from: (${err.url}) Status: (${err.status})`
    document.querySelector('body').textContent = message;
  })
}

function getSet(category) {
  fetch(`https://www.dnd5eapi.co/api/${category}`)
  .then(resp => {
    if (!resp.ok) throw resp
    return resp.json();
  })
  .then(set => set.results.forEach(getItem))
  .catch(err => {
    const message = `Error type: (${err.type}) Fetch from: (${err.url}) Status: (${err.status})`
    document.querySelector('body').textContent = message;
  })
}

function getItem(set) {
  fetch(`https://www.dnd5eapi.co${set.url}`)
  .then(resp => resp.json())
  .then(item => createItem(item))
  .catch(err => {
    const message = `Error type: (${err.type}) Fetch from: (${err.url}) Status: (${err.status})`
    document.querySelector('body').textContent = message;
  })
}

function handleHeadings(categories) {
  const categoriesArr = Object.keys(categories);
  categoriesArr.forEach(category => {
    const li = document.createElement('li');
    li.textContent = category.replace(/-/, ' ');
    li.className = category;
    li.addEventListener('click', () => getSet(category))
    document.querySelector('#categories-container').appendChild(li);
  })
}

function createItem(item) {
  const regex = /\/api\/(\w+[-]?\w+)\//;
  const header = regex.exec(item.url)[1];
  //if the current header is (example ability scores)
    //create ability score
  switch(header) {
    case 'ability-scores':
      //createAbility
      break;
    case 'alignments':
      //createAlignment
      break;
    case 'backgrounds':
      //createBackground
      break;
    case 'classes':
      //createClass
      break;
    case 'conditions':
      //createCondition
      break;
    case 'damage-types':
      //createDamageType
      break;
    case 'equipment-categories':
      //createEquipmentCategory
      break;
    case 'equipment':
      //createEquipment
      break;
    case 'feats':
      //createFeat
      break;
    case 'features':
      //createFeature
      break;
    case 'languages':
      //createLanguage
      break;
    case 'magic-items':
      //createMagicItem;
      break;
    case 'magic-schools':
      //createMagicSchool
      break;
    case 'monsters':
      //createMonster
      break;
    case 'proficiencies':
      //createProficiency
      break;
    case 'races':
      //createRace
      break;
    case 'rules':
      //createRule
      break;
    case 'rule-sections':
      //createRuleSection
      break;
    case 'skills':
      //createSkill
      break;
    case 'spells':
      //createSpell
      break;
    case 'subclasses':
      //createSubclass
      break;
    case 'subraces':
      //createSubrace
      break;
    case 'traits':
      //createTrait
      break;
    case 'weapon-properties':
      //createWeaponProperty
      break;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  getHeadings();
})

//REQUIREMENTS
//app must use HTML/CSS/JS frontend
  //accesses data from a public API
//entire app must run on a single page
  //no redirects - one html page
//3 seperate event listeners
//some interactivity is required
//keep code DRY


    //posibly add span for an arrow when li element is clicked it will point down when li element is clicked and point left when subcategories are not shoing