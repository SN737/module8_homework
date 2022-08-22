const inputUpper = document.querySelector('.inputupper');
const inputLower = document.querySelector('.inputlower');
const inputBtn = document.querySelector('input[type="button"]');
const image = document.querySelector('.image');
const  message = document.querySelector('.message');

inputBtn.addEventListener('click', async ()=> {
    if (!inputUpper.value.length || !inputLower.value.length ){  
        alert ('Вы не ввели значения');      
        return;
    } else if (inputLower.value<100 || inputLower.value>300 || inputUpper.value<100 || inputUpper.value>300 ) {        
        message.innerHTML = "<b>одно из чисел вне диапазона от 100 до 300</b>";
        clearInputs();        
    } else {
        await makeRequest(inputUpper.value, inputLower.value);
        clearInputs();
        message.innerHTML = "";            
    }
});

async function makeRequest(width, height) {
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