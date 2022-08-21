let  inputPages = document.querySelector('.inputpages');
let  inputLimit = document.querySelector('.inputlimit');
const inputBtn = document.querySelector('input[type="button"]');
const image = document.querySelector('.image');
let  message = document.querySelector('.message');



inputBtn.addEventListener('click', async ()=> {
    if (validCheck() !== 'valid') {
        return
    } else  {makeRequest()    
    }
})



//     if (!inputPages.value.length || !inputLimit.value.length ){  
//         alert ('Вы не ввели значения');      
//         return;
//     } else if (inputPages.value<1 || inputPages.value>10 || !inputPages.isInteger() ) {
        
//         message.innerHTML = "<b>Номер страницы вне диапазона от 1 до 10</b>";
//         clearInputs();
//         // inputBtn.disabled = true;

//     }else if (inputLimit.value<1 || inputLimit.value>10 || !inputLimit.isInteger() ) {
        
//         message.innerHTML = "<b>Лимит вне диапазона от 1 до 10</b>";
//         clearInputs();     
        
//     } else {
//         await makeRequest(inputUpper.value, inputLower.value);
//         clearInputs();
            
//     }
// });

function validCheck () {
    let limit = Number(inputLimit.value);
    let pages = Number(inputPages.value);
    if ((pages<1 || pages>10 || !Number.isInteger(pages)) && (
     limit<1 || limit>10 || !Number.isInteger(limit))){
        clearInputs();
        return message.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        }
        else if (pages<1 || pages>10 || !Number.isInteger(pages) ) {
        clearInputs();
       return message.innerHTML = "<b>Номер страницы вне диапазона от 1 до 10</b>";
        }
        else if (limit<1 || limit>10 || !Number.isInteger(limit) ) {
        clearInputs();
        return message.innerHTML = "<b>Лимит вне диапазона от 1 до 10</b>";   
        } else { message.innerHTML = '';
        return "valid";}
}

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
    inputPages.value = '';
    inputLimit.value = '';
}