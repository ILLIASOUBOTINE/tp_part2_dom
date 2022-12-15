const container = document.querySelector(".container");
const list = document.querySelector("ul");
const contentPanier = document.querySelector(".content_panier");
const panier = document.querySelector(".panier");
const pTotale = document.querySelector(".totale");


arrProduit = [
  { nom: "Pomme", conteur: 0, prixtotal: 0, prix: 2 },
  { nom: "Poire", conteur: 0, prixtotal: 0, prix: 3 },
  { nom: "Prune", conteur: 0, prixtotal: 0, prix: 1 },
];



// pour list sans prix

// list.addEventListener("click",(e)=> {
//   for(let item of arrProduit){
//     if (e.target.innerText === item.nom ) {
//       if (item.conteur === 0) {
//         let div = creteElem(contentPanier, "div");

//          creteElem(div, "p").innerText = item.nom;
//          creteElem(div, "span").innerText = ++item.conteur;
//          creteElem(div, "button").innerText = '\u2613';
//         //  console.dir(creteElem(div, "button"));
//       }else {

//         for(let item1 of contentPanier.children){
//           if (item1.firstChild.innerText === item.nom) {

//             item1.firstChild.nextElementSibling.innerText = ++item.conteur;

//          }
//         }
//         // item.conteur++;
//       }

//     }
//   }
// })




list.addEventListener("click", (e) => {
  for (let item of arrProduit) {
    if (e.target.innerText.split(" ")[0] === item.nom) {
      if (item.conteur === 0) {
        let div = creteElem(contentPanier, "div");

        creteElem(div, "p").innerText = item.nom;

        let span = creteElem(div, "span");
        ++item.conteur;
        item.prixtotal = item.prix * item.conteur;
        creteElem(span, "span").innerText = `${item.conteur} \u2613 ${
          item.prix
        }\u0024 \u003D ${item.prixtotal}\u0024`;
        creteElem(div, "button").innerText = "\u2613";
        // pTotale.innerText = `Totale ${item.prixtotal}`;
      } else {
        for (let item1 of contentPanier.children) {
          if (item1.firstChild.innerText === item.nom) {
            ++item.conteur;
            item.prixtotal = item.prix * item.conteur;
            item1.firstChild.nextElementSibling.innerText = `${
              item.conteur
            } \u2613 ${item.prix}\u0024 \u003D ${
              item.prixtotal
            }\u0024`;
            // pTotale.innerText = `Totale ${item.prixtotal}`;
          }
        }
      }
    }

      pTotale.innerText = `Totale ${summTotale(arrProduit,"prixtotal")}\u0024`;
  }
});

list.addEventListener("click", (e) => {
  for (let item of arrProduit) {
    if (e.target.innerText === item.nom) {
      if (item.conteur === 0) {
        let div = creteElem(contentPanier, "div");

        creteElem(div, "p").innerText = item.nom;
        creteElem(div, "span").innerText = ++item.conteur;
        creteElem(div, "button").innerText = "\u2613";
        //  console.dir(creteElem(div, "button"));
      } else {
        for (let item1 of contentPanier.children) {
          if (item1.firstChild.innerText === item.nom) {
            item1.firstChild.nextElementSibling.innerText = ++item.conteur;
          }
        }
        // item.conteur++;
      }
    }
  }
});

contentPanier.addEventListener("click", (e) => {
  for (let item of contentPanier.children) {
    if (e.target === item.lastChild) {
      for (let item1 of arrProduit) {
        if (item.firstChild.textContent === item1.nom) {
          item1.conteur = 0;
          item1.prixtotal = 0;
          
        }
      }
      item.lastChild.parentElement.remove();
    }
    pTotale.innerText = `Totale ${summTotale(arrProduit,"prixtotal")}\u0024`;
  }
});

function creteElem(parent, elem) {
  let newElem = document.createElement(elem);
  parent.append(newElem);
  return newElem;
}

function summTotale(arr, param) {
  let summ = 0;
  for(let item of arr){
    summ += item[param];
  }
  return summ;
}

console.log(summTotale(arrProduit,"prixtotal"));


