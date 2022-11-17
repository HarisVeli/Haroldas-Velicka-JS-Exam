/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsersBtn = document.getElementById("btn");
const output = document.getElementById("output");
const message = document.getElementById("message");

showUsersBtn.addEventListener("click", newCards);

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.warn("Error date source..", error));
}

function newCards() {
  if (showUsersBtn.textContent === "Hide Users") {
    showUsersBtn.textContent = "Show Users";
    message.style.display = "block";
    output.innerHTML = "";
    output.append(message);
  } else {
    getData(ENDPOINT).then((dataArr) => {
      dataArr.forEach((object) => {
        createOneCard(object, output);
      });
    });
    showUsersBtn.textContent = "Hide Users";
    message.style.display = "none";
  }
}

function createOneCard(obj, dest) {
  const divElement = document.createElement("div");
  divElement.className = "card";

  const imgElement = document.createElement("img");
  imgElement.className = "user_avatar";
  imgElement.src = obj.avatar_url;

  const pElement = document.createElement("p");
  pElement.className = "user_login";
  pElement.textContent = obj.login;

  divElement.append(imgElement, pElement);
  dest.append(divElement);
}