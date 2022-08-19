const inputUpper = document.querySelector('.inputupper');
const inputLower = document.querySelector('.inputlower');
const inputAll = document.querySelectorAll('input');
const inputBtn = document.querySelector('input[type="button"]');
const image = document.querySelector('.image');
let  message = document.querySelector('.message');


inputBtn.addEventListener('click', async ()=> {
    if (!inputUpper.value.length || !inputLower.value.length ){        
        // alert('введите числовое значение');
        // input.value = '';
        return;
    } else if (inputLower.value<100 || inputLower.value>300 || inputUpper.value<100 || inputUpper.value>300 ) {
        
        message.innerHTML = "<b>одно из чисел вне диапазона от 100 до 300</b>";
        clearInputs();
        // inputBtn.disabled = true;
        
    } else {
        await makeRequest(inputUpper.value, inputLower.value);
        clearInputs();
            
    }
});

function makeRequest(width, height) {
    let url =`https://picsum.photos/${width}/${height}`;
    fetch (url)
    .then ((response) => {
        return renderImage(response.url);})
    .catch (() =>{alert('Ошибка запроса');
        });
}

function renderImage(result){
    image.innerHTML = `<div class = "img"><img src="${result}"/></div>`;
}

function clearInputs (){
    inputUpper.value = '';
    inputLower.value = '';
}