const input = document.querySelector('input');
const inputBtn = document.querySelector('input[type="button"]');
const message = document.querySelector('message');



inputBtn.addEventListener('click', ()=> {
    if (!input.value.length){
        alert('exit');
        return;
    } else if (input.value>10 || input.value<1) {
        message.innerHTML = "число вне диапазона от 1 до 10";
        alert('число вне диапазона от 1 до 10');
    } else {
        alert('akajk');
        xhrReq();
    }
});
