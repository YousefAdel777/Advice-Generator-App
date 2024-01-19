let advice = document.getElementById("advice");
let adviceBtn = document.getElementById("random_advice");
let adviceId = document.getElementById("advice_id")

displayAdvice(fetch("https://api.adviceslip.com/advice").then((resolve) => resolve.json()));

adviceBtn.addEventListener("click", () => displayAdvice(fetch("https://api.adviceslip.com/advice").then((resolve) => resolve.json())));

async function displayAdvice(promise) {
    advice.innerHTML = "";
    let loading = document.createElement("div");
    loading.className = "loading";
    for (let i = 0; i < 3; ++i) {
        let span = document.createElement("span");
        loading.appendChild(span);
    }
    advice.appendChild(loading);
    try {
        let adviceData = await promise;
        advice.innerHTML = `"${adviceData.slip.advice}"`;
        adviceId.innerHTML = `${adviceData.slip.id}`;
    }
    catch (error) {
        console.log(error);
    }
}