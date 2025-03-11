let botoesSuperior = document.querySelector(".botaoSuperior");

botoesSuperior.addEventListener("mouseenter", () => {
    botoesSuperior.style.animation = "mascara 1s steps(22) forwards";
});

botoesSuperior.addEventListener("mouseleave", () => {
    botoesSuperior.style.animation = "mascaraInverso .7s steps(22) forwards";
});












// const txtEfeito = document.querySelector(".txtEfeito");
// const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let intervalo = null;

// txtEfeito.onmouseover = () => {
//   let contador = 0;
//   clearInterval(intervalo);

//   intervalo = setInterval(() => {
//     txtEfeito.innerText = txtEfeito.innerText
//       .split("")
//       .map((letra, index) => {
//         if (index < contador) {
//           return txtEfeito.dataset.texto[index];
//         } else {
//           //o floor arredonda para baixo e o math.random gera um número aleatório
//           return alfabeto[Math.floor(Math.random() * 26)];
//         }
//       })
//       .join("");

//     if (contador >= txtEfeito.innerText.length){
//       clearInterval(intervalo);
//     }

//     contador = contador + 1/3;
//   }, 30 );
// };
