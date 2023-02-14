

// for(i = 0; i < names.length; i++){
//   console.log(names[i].innerText);
// }



let members = `[
  {
    "firstname": "Jeremiah",
    "lastname": "Jangad",
    "role": "Pastor, Covenant Member",
    "date": "2013"
  },
  {
    "firstname": "Mary Joy",
    "lastname": "Jangad",
    "role": "Covenant Member",
    "date": "2013"
  },
{
    "firstname": "Joenel",
    "lastname": "Afable",
    "role": "Covenant Member",
    "date": "2013"
  },
{
    "firstname": "Harry",
    "lastname": "Gonzales",
    "role": "Covenant Member",
    "date": "2014"
  },
{
    "firstname": "Lorenzo",
    "lastname": "Tating Jr.",
    "role": "Deacon, Covenant Member",
    "date": "2015"
  },
{
    "firstname": "Riza",
    "lastname": "Tating",
    "role": "Covenant Member",
    "date": "2015"
  },
{
    "firstname": "Jeff",
    "lastname": "Chavez",
    "role": "Deacon, Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Gloryben",
    "lastname": "Chavez",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Eliseo",
    "lastname": "Openio",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Elena",
    "lastname": "Openio",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Remy",
    "lastname": "Lagucay",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Henry",
    "lastname": "Sealongo",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Lorna",
    "lastname": "Sealongo",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Creziel",
    "lastname": "Mercado",
    "role": "Covenant Member",
    "date": "2016"
  },
{
    "firstname": "Ruby",
    "lastname": "Sarco",
    "role": "Covenant Member",
    "date": "2017"
  },
{
    "firstname": "Sam",
    "lastname": "Tacdoro",
    "role": "Covenant Member",
    "date": "2017"
  },
{
    "firstname": "Divine",
    "lastname": "Tacdoro",
    "role": "Covenant Member",
    "date": "2017"
  },
{
    "firstname": "Cristina",
    "lastname": "Olo",
    "role": "Covenant Member",
    "date": "2017"
  },
{
    "firstname": "Jordan",
    "lastname": "Ravanes",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Jerry",
    "lastname": "del Mundo",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Adora",
    "lastname": "del Mundo",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Esther Joi",
    "lastname": "del Mundo",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Joshua",
    "lastname": "Figueroa",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Jihan",
    "lastname": "Figueroa",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Mercy",
    "lastname": "Figueroa",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Dhon",
    "lastname": "Timblor",
    "role": "Associate Member",
    "date": "2018"
  },
{
    "firstname": "Christian David",
    "lastname": "Bare",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Kate",
    "lastname": "Bare",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Psalm",
    "lastname": "Torres",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Christian Joriz",
    "lastname": "Fairbanks",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Genevieve",
    "lastname": "Carrillo",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Bar",
    "lastname": "Carrillo",
    "role": "Covenant Member",
    "date": "2018"
  },
{
    "firstname": "Isagani",
    "lastname": "Azur",
    "role": "Covenant Member",
    "date": "2019"
  },
{
    "firstname": "Chris John",
    "lastname": "Apinan",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Junilyn",
    "lastname": "Apinan",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Ma. Jesus",
    "lastname": "Solidum",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Stephanie Anne",
    "lastname": "Solidum",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Sarah Allyssa",
    "lastname": "Solidum",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Christian",
    "lastname": "Francisco",
    "role": "Deacon, Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Shana",
    "lastname": "Francisco",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Geno Carlo A.",
    "lastname": "Miravalles",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Rochelle Veronica P.",
    "lastname": "Miravalles",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Ernest Jay",
    "lastname": "Brun",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Erniela Jam",
    "lastname": "Brun",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Maria Cecilla G.",
    "lastname": "Azur",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "John Charles",
    "lastname": "Lazaro",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "Jhoven",
    "lastname": "Asperin",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "David",
    "lastname": "Dawal",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "Randy",
    "lastname": "Marchadesch",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "Armel Jay",
    "lastname": "Mercado",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Peter",
    "lastname": "Zambrano",
    "role": "Covenant Member",
    "date": "2021"
  },
{
    "firstname": "Kristine",
    "lastname": "Duhaylungsod",
    "role": "Associate Member",
    "date": "September 2021"
  },
{
    "firstname": "Tim",
    "lastname": "Duhaylungsod",
    "role": "Associate Member",
    "date": "September 2021"
  },
{
    "firstname": "Flordeliz",
    "lastname": "Manila",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Angelica",
    "lastname": "Fernandez",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Cristine",
    "lastname": "Cance",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Ramon",
    "lastname": "Musngi",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Marissa",
    "lastname": "Musngi",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Aries Jake",
    "lastname": "Montilla",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Regina",
    "lastname": "Montilla",
    "role": "Covenant Member",
    "date": "December 2021"
  },
{
    "firstname": "Junariez",
    "lastname": "Musngi",
    "role": "Covenant Member",
    "date": "December 2021"
  },
  {
    "firstname": "Vince",
    "lastname": "Tombaga",
    "role": "Covenant Member",
    "date": " January 2022"
  },
  {
    "firstname": "John Owie",
    "lastname": "Erauda",
    "role": "Covenant Member",
    "date": " September 2022"
  },
  {
    "firstname": "Mary Uson",
    "lastname": "Erauda",
    "role": "Covenant Member",
    "date": " September 2022"
  },
  {
    "firstname": "Steven James",
    "lastname": "Llabres",
    "role": "Covenant Member",
    "date": " September 2022"
  },
  {
    "firstname": "Maribel",
    "lastname": "Llabres",
    "role": "Covenant Member",
    "date": " September 2022"
  },
  {
    "firstname": "Ronald Jr.",
    "lastname": "Caceres",
    "role": "Covenant Member",
    "date": " September 2022"
  },
  {
    "firstname": "Hanna",
    "lastname": "Caceres",
    "role": "Covenant Member",
    "date": " September 2022"
  },
  {
    "firstname": "Kiel Cedric",
    "lastname": "Ramos",
    "role": "Covenant Member",
    "date": "November 2022"
  },
  {
    "firstname": "Jon Emil",
    "lastname": "Bacus",
    "role": "Covenant Member",
    "date": "November 2022"
  },
  {
    "firstname": "Lailanie",
    "lastname": "Dela Cruz",
    "role": "Covenant Member",
    "date": "November 2022"
  },
  {
    "firstname": "Jeremiah T",
    "lastname": "Arellano",
    "role": "Covenant Member",
    "date": "November 2022"
  },
  {
    "firstname": "Gerry",
    "lastname": "Guarino",
    "role": "Covenant Member",
    "date": " November 2022"
  },
  {
    "firstname": "Fanny",
    "lastname": "Guarino",
    "role": "Covenant Member",
    "date": " November 2022"
  },
  {
    "firstname": "Lawrence",
    "lastname": "Castillo",
    "role": "Covenant Member",
    "date": " January 2023"
  }

  
]`

const membersNew = JSON.parse(members);
const total = membersNew.length;
const membersCard = document.getElementById("row");
const cancel = document.getElementById('clear-result');
const searchMembers = document.getElementById('searchButton');

const allMembersShow = () => {

  const memberList = membersNew.map(member => 
    ` <div class="col col_image">
        <div> <img class="member__image" src="/images/${member.firstname}.jpg"></div>
        <h2 class="main-members-name">${member.firstname} ${member.lastname}</h2>
        <p class="member-description">${member.role}</p>
        <p>Since: ${member.date}</p>
  </div>`  
  )
  const showMembers = membersCard.innerHTML = memberList;
}

allMembersShow()

const showTotal = () => { 
  const myText = document.getElementById("showTotal");
  myText.innerText = total;
} 
showTotal()




const findMatches = (wordToMatch, names) => {
  return names.filter(name => {
    const regex = new RegExp(wordToMatch, 'gi');
    return name.firstname.match(regex) || name.lastname.match(regex) 
          || name.date.match(regex) || name.role.match(regex);
  })
}


const displayMatches = () => {
    const value = searchMembers.value;
    const matchArray = findMatches(value, membersNew);
    const showTotalResults = () => { 
      const myText = document.getElementById("showTotal");
      myText.innerText = matchArray.length;
    }
    showTotalResults()

    const html =  matchArray.map(member => 
      ` <div class="col col_image">
      <div> <img class="member__image" src="/images/${member.firstname}.jpg"></div>
      <h2 class="main-members-name">${member.firstname} ${member.lastname}</h2>
      <p class="member-description">${member.role}</p>
      <p>Since: ${member.date}</p>
        </div>`  
    )
    const showMembers = document.getElementById("row").innerHTML = html;

    if (matchArray.length == 0) {
      document.getElementById("row").innerHTML = `<h2 class="results">No Results Found</h2>`;
      console.log('no results');
    } 

    return showMembers;
}


if (searchMembers.value !== "") {
  console.log('nothing here');
  cancel.classList.remove('.visible');
} 

searchMembers.addEventListener('change', displayMatches);
searchMembers.addEventListener('keyup', displayMatches);



const clearResult = () => {
  const clear = searchMembers.value = "";
  allMembersShow();
  showTotal();
  return clear;
}

cancel.addEventListener('click', clearResult);
// searchYear.addEventListener('change', displayMatches(value2));






// console.log(membersNew[1])
// const ordered = membersNew.sort((a, b) => {
//   if(a.date > b.date) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

// console.table(ordered);
