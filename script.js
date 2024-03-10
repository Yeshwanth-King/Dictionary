let input = document.querySelector("input");
let btn = document.querySelector("button");
let def = document.querySelector(".def1");
let example = document.querySelector(".def2");
let speech = document.querySelector(".noun");
let BASEURL = "https://api.dictionaryapi.dev/api/v2/entries/en";
async function getdef(inp) {
  let URL = `${BASEURL}/${inp}`;
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data[0]);
  speech.innerHTML = `<h2>${data[0].meanings[0].partOfSpeech}</h2>`;
  def.innerHTML = `<p>${data[0].meanings[0].definitions[0].definition}</p>`;
  example.innerHTML = `<p>${
    data[0].meanings[0].definitions[0].example || ""
  } </p>`;
  console.log(data[0].meanings[0].partOfSpeech);
  console.log(data[0].meanings[0].definitions[0].definition);
  console.log(inp);
}

btn.addEventListener("click", () => {
  console.log(input.value);
  getdef(input.value);
});
