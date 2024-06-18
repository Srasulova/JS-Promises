let favoriteNumber = 2;
const baseURL = "http://numbersapi.com";

let numberfact = axios.get(`${baseURL}/${favoriteNumber}/math`).then((res) => {
  return res.data;
});

function appendPar() {
  numberfact
    .then((fact) => {
      const p = document.createElement("p");
      p.innerHTML = fact;
      document.getElementById("number").appendChild(p);
    })
    .catch((error) => {
      console.log(`Error is ${error}`);
    });
}

appendPar();

let multipleNumbers = [1, 2, 3, 4, 5];

let multipleNumbersfactPromises = multipleNumbers.map((number) =>
  axios.get(`${baseURL}/${number}/trivia`)
);

console.log(multipleNumbersfactPromises);

Promise.all(multipleNumbersfactPromises)
  .then((responses) =>
    responses.forEach((res) => {
      const li = document.createElement("li");
      li.innerHTML = res.data;
      document.getElementById("multipleNumbers").appendChild(li);
    })
  )
  .catch((error) => {
    console.log(`Error is ${error}`);
  });

let fourFactsAboutFavNum = Array(4)
  .fill(favoriteNumber)
  .map((num) => axios.get(`${baseURL}/${num}/trivia`));

Promise.all(fourFactsAboutFavNum)
  .then((responses) =>
    responses.forEach((res) => {
      console.log(res);
      const li = document.createElement("li");
      li.innerHTML = res.data;
      document.getElementById("multipleFacts").appendChild(li);
    })
  )
  .catch((error) => {
    console.log(`Error is ${error}`);
  });
