const input = document.querySelector('.input');
const inputBtn = document.querySelector('input[type="button"]');
const  message = document.querySelector('.message');
const picture = document.querySelector('.picture');

input.addEventListener('input', () => {
    if(!input.value.length){
        inputBtn.disabled = true;
    } else{
        inputBtn.disabled = false;}  
});

inputBtn.addEventListener('click', ()=> {
    if (!input.value.length){        
        // alert('введите числовое значение');
        // input.value = '';
        return;
    } else if (input.value>10 || input.value<1) {        
        message.innerHTML = "<b>Число вне диапазона от 1 до 10</b>";
        input.value = '';
        inputBtn.disabled = true;        
    } else {        
        xhrReq(input.value);
        input.value = '';
        inputBtn.disabled = true;
        message.innerHTML = "";        
    }
});

function xhrReq(value){
    let xhr = new XMLHttpRequest();
    let url = `https://picsum.photos/v2/list?limit=${value}`;
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = ()=> {
    let responseArr = JSON.parse(xhr.response);    
    renderImg(responseArr);    
    };     
    xhr.onerror = ()=> {
        alert('Ошибка запроса');
      };      
}

function renderImg(responseArr) {
    picture.innerHTML= '';
    responseArr.forEach(item => {
        let itemImg= `<div class = "img"><img src="${item.download_url}"/></div>`;
        picture.innerHTML += itemImg;  
    });
}
