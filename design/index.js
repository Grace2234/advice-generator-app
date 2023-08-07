const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("gen-btn");
const url = "https://api.adviceslip.com/advice"

function getAdvice() {

    fetch('https://api.adviceslip.com/advice').then
    (response => {
        return response.json();
    }).then(adviceData => {
        const advice = adviceData.slip.advice;

        
        adviceText.textContent = advice;

    }).catch(error => {
        console.log(error);
    })
}
adviceBtn.addEventListener('click', getAdvice)

