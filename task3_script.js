const input = document.querySelector('input');
const inputBtn = document.querySelector('input[type="button"]');
let  message = document.querySelector('.message');



inputBtn.addEventListener('click', ()=> {
    if (!input.value.length){
        alert('введите числовое значение');
        return;
    } else if (input.value>10 || input.value<1) {
        // alert('число вне диапазона от 1 до 10');
        message.innerHTML = "<b>число вне диапазона от 1 до 10</b>";
        
    } else {
        alert('вызываем функцию');
        xhrReq(input.value);
        
    }
});

function xhrReq(value){
    let xhr = new XMLHttpRequest();
    let url = `https://picsum.photos/v2/list?limit=${value}`;
    xhr.open('GET', url);
}
