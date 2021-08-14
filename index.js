
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
  .then(set => set.results.forEach(createNamePlate))
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
    const li = document.createElement('h5');
    li.textContent = header.replace(/-/, ' ');
    li.className = header;
    li.addEventListener('click', () => {
      Array.from(document.querySelector('#item-list').children).forEach(child => child.remove())
      getSet(header)
    })
    document.querySelector('#header-container').appendChild(li);
  })
}

function createNamePlate(item) {
  const itemList = document.querySelector('#item-list');
  const bttn = document.createElement('button');
  bttn.textContent = item.name;
  bttn.addEventListener('click', () => {
    Array.from(itemList.children).forEach(item => item.remove());
    getItem(item)
  });
  itemList.appendChild(bttn);
}

function createItem(item) {
  const regex = /\/?api\/(\w+[-]?\w+)\//;
  const header = regex.exec(item.url)[1];
  switch(header) {
    case 'ability-scores':
      createAbility(item);
      return;
    case 'alignments':
      createAlignment(item);
      return;
    case 'backgrounds':
      //createBackground(item);
      return;
    case 'classes':
      //createClass
      return;
    case 'conditions':
      //createCondition
      return;
    case 'damage-types':
      //createDamageType
      return;
    case 'equipment-categories':
      //createEquipmentCategory
      return;
    case 'equipment':
      //createEquipment
      return;
    case 'feats':
      //createFeat
      return;
    case 'features':
      //createFeature
      return;
    case 'languages':
      //createLanguage
      return;
    case 'magic-items':
      //createMagicItem;
      return;
    case 'magic-schools':
      //createMagicSchool
      return;
    case 'monsters':
      //createMonster
      return;
    case 'proficiencies':
      //createProficiency
      return;
    case 'races':
      //createRace
      return;
    case 'rules':
      //createRule
      return;
    case 'rule-sections':
      //createRuleSection
      return;
    case 'skills':
      //createSkill
      return;
    case 'spells':
      //createSpell
      return;
    case 'subclasses':
      //createSubclass
      return;
    case 'subraces':
      //createSubrace
      return;
    case 'traits':
      //createTrait
      return;
    case 'weapon-properties':
      //createWeaponProperty
      return;
    }
  }
  
  function createAbility(item) {
  const heading = document.createElement('h3');
  heading.textContent = item.full_name;

  const description = document.createElement('p');
  description.textContent = item.desc;
  
  const skillsLabel = document.createElement('h4');
  skillsLabel.textContent = 'Skills';
  
  const skillList = document.createElement('ul');
  item.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.name;
    skillList.appendChild(li);
  })

  if (skillList.children.length < 1) {
    const li = document.createElement('li');
    li.innerText = 'None';
    skillList.appendChild(li);
  }

  const ability = document.createElement('div')
  ability.append(heading, description, skillsLabel, skillList)
  document.querySelector('#item-list').appendChild(ability);
}

function createAlignment(item) {
  const heading = document.createElement('h3');
  heading.textContent = item.name;
  
  const description = document.createElement('p');
  description.textContent = item.desc;
  
  const alignment = document.createElement('div');
  alignment.append(heading, description);

  document.querySelector('#item-list').appendChild(alignment)
}


//for the item cards
  //each card should be connected
  /*
   _  _ _ _ _ _
  |_||_|_|_|_|_|
  */
  //when you hover over it
    //it should look like its being pressed
  //when you click the card it should render more information about that card


document.addEventListener('DOMContentLoaded', () => {
  getHeadings();
})

//createBackground
//createClass
//createConditions
//createDamageType
//createEquipmentCategory
//createEquipment
//createFeats
//createFeatures
//createLanguages
//createMagicItem
//createMagicSchool
//createMonster
//createProficiency
//createRace
//createRule
//createRuleSection
//createSkill
//createSpell
//createSubclass
//createSubrace
//createTrait
//createWeaponProperty



//REQUIREMENTS
//app must use HTML/CSS/JS frontend
  //accesses data from a public API
//entire app must run on a single page
  //no redirects - one html page
//3 seperate event listeners
//some interactivity is required
//keep code DRY

//Instead of posting the entire information about all of the items when you click a header
  //create a bunch of cards
    //when you click on a card it will give you more information on that item

//some of the information provided, provides a resource with more information on that item
    
//This was when I was thinking about putting the sets underneath the headers in the headers column    
  //posibly add span for an arrow when li element is clicked it will point down when li element is clicked and point left when subcategories are not shoing