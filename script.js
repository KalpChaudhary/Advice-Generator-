const adviceID = document.querySelector(".advice_id");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".btn_change");

const API_URL = `https://api.adviceslip.com/advice`;

const adviceAPICall = async function () {
  try{
    const apidata = await fetch(API_URL);
    const data = await apidata.json();
    const { advice: adviceQuote, id } = data.slip;
    adviceID.textContent = `Advice #${id}`;
    advice.textContent = `"${adviceQuote}"`;
  }catch(err){
    console.error(err);
  }
};
adviceAPICall();

btn.addEventListener("click", adviceAPICall);
