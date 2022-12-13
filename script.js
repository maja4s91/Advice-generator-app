// import "core-js/stable";

// // polofilling async f
// import "regenerator-runtime/runtime";

// if (module.hot){
//   module.hot accept();
// }

const btnDice = document.querySelector(".btn-dice");
console.log(btnDice);

const getQuote = async function () {
  try {
    let res = await fetch("https://api.adviceslip.com/advice");
    let slip = await res.json();

    const slipId = slip.slip.id;
    const slipAdvice = slip.slip.advice;
    console.log(slipId, slipAdvice);

    const quoteId = document.querySelector(".quote-number");
    quoteId.innerHTML = `ADVICE #${slipId}`;

    const quote = document.querySelector(".quote");
    quote.innerHTML = `"${slipAdvice}"`;
  } catch (err) {
    console.error(err);
  }
};

// getQuote();

btnDice.addEventListener("click", function (e) {
  e.preventDefault();
  getQuote();
});

// const renderQuote = function (slip) {
//   const quote = slip.advice;
// };
