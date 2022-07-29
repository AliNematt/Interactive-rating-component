const submit = document.querySelector(".submit")
const box = document.querySelector(".container")

submit.addEventListener('click', function () {
    const userPoint = document.querySelector('input[name="point"]:checked').value;
    box.innerHTML = `
    <div id="thank">
        <img src="./images/illustration-thank-you.svg" alt="#" class="thanks-img">
        <div class="user-point"><span> You selected ${userPoint} out of 5 </span></div>
        <h1 class="title">Thank you!</h1>
        <p class="description">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
        </div> 
    `
})
// document.querySelector('input[name="rate"]:checked').value;

{/* <div id="thank">
<img src="./images/illustration-thank-you.svg" alt="#" class="thanks-img">
<div class="user-point"><span> You selected 4 out of 5 </span></div>
<h1 class="title">Thank you!</h1>
<p class="description">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
</div> */}