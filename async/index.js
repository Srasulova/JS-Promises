let favoriteNumber = 2;
const baseURL = "http://numbersapi.com";

// Task 1
async function factsAboutFavNum() {
  const facts = await axios.get(`${baseURL}/${favoriteNumber}/math`);
  console.log(facts.data);
  const p = document.createElement("p");
  p.innerHTML = facts.data;
  document.getElementById("number").appendChild(p);
}

factsAboutFavNum();

// Task 2

let multipleNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

function factsAboutMultipleNumbers(arr) {
  arr.map(async (num) => {
    const facts = await axios.get(`${baseURL}/${num}/trivia`);
    const li = document.createElement("li");
    li.innerHTML = facts.data;
    document.getElementById("multipleNumbers").appendChild(li);
    console.log(facts.data);
  });
}

factsAboutMultipleNumbers(multipleNumbers);

// Task 3

myArr = Array(4).fill(favoriteNumber);

function fourFactsAboutFavNum(arr) {
  arr.map(async (num) => {
    const facts = await axios.get(`${baseURL}/${num}/trivia`);
    const li = document.createElement("li");
    li.innerHTML = facts.data;
    document.getElementById("multipleFacts").appendChild(li);
    console.log(facts.data);
  });
}

fourFactsAboutFavNum(myArr);
