//lista avuta e creata

const generateCard = (dataObj) => {
  const cardContainer = document.getElementById("cards-container"); //contenitore task

  const card = document.createElement("div"); //crea div dove contenere task
  card.className = "card"; //classe card (task)

  //   const title = document.createElement("h2");

  //   title.innerText = "Lista Task";

  const p = document.createElement("p"); //elemento task
  p.innerText = dataObj.testoTask; //testo dentro input

  p.onclick = function () {
    //cliccando si mette una linea
    p.style = "text-decoration-line : line-through";
  };
  p.classList.add("p-task");
  const cardBtn = document.createElement("button"); //bottone elimina task
  cardBtn.classList.add("card-btn"); //classe per bottone
  cardBtn.innerText = "Elimina Task"; //testo bottone
  cardBtn.onclick = function (e) {
    // currentTarget ritorna SEMPRE il PROPRIETARIO DELL'EVENTO a prescindere da dove clicchiamo
    // nel caso di elemento con figli, il target potrebbe ritornarci gli elementi interni se cliccati
    console.log("card btn target", e.currentTarget);

    e.currentTarget.closest(".card").remove(); // partendo dal bottone cliccato (currentTarget), andiamo a cercare verso l'esterno il primo elemento che corrisponde alla classe .card e lo rimuoviamo
  };

  card.append(p, cardBtn);
  cardContainer.appendChild(card);
};

// generateCard = (dataObj) => {
//   const title = document.createElement("h2");

//   const div = document.querySelector("cards-container");

//   title.innerText = "Lista Task";

//   const contTtile = document.createElement("div"); //crea div dove contenere task
//   contTitle.className = "card"; //classe card (task)

//   card.append(title);
//   div.appendChild(contTtile);
// };

const form = document.querySelector("form"); //form

form.addEventListener("submit", function (e) {
  // il from di default refresha la pagina, vogliamo prevenire questo comportamento!
  e.preventDefault(); // dimenticare questo passaggio non vi farà funzionare NIENTE!
  console.log("form event", e);

  // creo un oggetto che mi raggruppa i dati raccolti dai singoli campi input che selezionerò dal DOM

  const inputDescNode = document.querySelector("input"); //testo inserito dall'utente

  console.dir(inputDescNode);
  console.log(inputDescNode.value);

  const myData = {
    testoTask: inputDescNode.value, // ora troviamo la stringa contenuta nel .value del nodo
  };

  console.log("ABBIAMO I SUOI DATI SIGNORE: ", myData);
  generateCard(myData); //funzione che genera lista task

  e.target.reset();
});
