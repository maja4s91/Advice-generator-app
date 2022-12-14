const btnDice = document.querySelector(".btn-dice");
const quoteId = document.querySelector(".quote-number");
const quote = document.querySelector(".quote");

const getQuote = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const slip = await res.json();

    const slipId = slip.slip.id;
    const slipAdvice = slip.slip.advice;

    quoteId.innerHTML = `ADVICE #${slipId}`;
    quote.innerHTML = `"${slipAdvice}"`;
  } catch (err) {
    console.error(err);
  }
};

getQuote();

btnDice.addEventListener("click", function (e) {
  e.preventDefault();
  getQuote();
});
