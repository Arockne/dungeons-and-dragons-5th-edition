//when the page loads append categories to categories container
//add an event listener when the header is clicked a dropdown of subcategories for that header will load
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

function getSet(header) {
  fetch(`https://www.dnd5eapi.co/api/${header}`)
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
  const url = set.url[0] === '/' ? set.url : `/${set.url}`;
  const address = `https://www.dnd5eapi.co${url}`;
  fetch(address)
  .then(resp => {
    //if (!resp.ok) throw resp;
    return resp.json()
  })
  .then(item => createItem(item))
  // .catch(err => {
  //   const message = `Error type: (${err.type}) Fetch from: (${err.url}) Status: (${err.status})`
  //   document.querySelector('body').textContent = message;
  // })
}

function handleHeadings(headers) {
  const headerArr = Object.keys(headers);
  headerArr.forEach(header => {
    const li = document.createElement('li');
    li.textContent = header.replace(/-/, ' ');
    li.className = header;
    li.addEventListener('click', () => getSet(header))
    document.querySelector('#header-container').appendChild(li);
  })
}

function createItem(item) {
  const regex = /\/?api\/(\w+[-]?\w+)\//;
  const header = regex.exec(item.url)[1];
  switch(header) {
    case 'ability-scores':
      createAbility(item);
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

function createAbility(item) {
  const heading = document.createElement('h3');
  heading.textContent = item.full_name;

  const description = document.createElement('p');
  description.textContent = item.desc;

  const skillList = document.createElement('ul');
  skillList.innerHTML = '<h3>Skills</h3>'
  item.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.name;
    skillList.appendChild(li);
  })

  const ability = document.createElement('li')
  ability.append(heading, description, skillList)
  document.querySelector('#item-list').appendChild(ability);
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