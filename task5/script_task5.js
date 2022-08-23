const wrapper = document.querySelector('.container');
const inputPages = document.querySelector('.inputpages');
const inputLimit = document.querySelector('.inputlimit');
const inputBtn = document.querySelector('input[type="button"]');
const message = document.querySelector('.message');
const key = 'photoGallery';

checkLocalStorage();

function checkLocalStorage(){
    let localStorageData = localStorage.getItem(key);
    if (localStorageData == null) {
        return;
        } else {            
            let imageArray =  JSON.parse(localStorage.getItem(key));
            renderImage(imageArray);
            return imageArray;
        }
}

inputBtn.addEventListener('click', ()=> {
    if (validCheck() !== 'valid') {
        return;
    } else{
        makeRequest(inputPages.value, inputLimit.value);
        let picture = document.querySelector('.image');
        picture.remove();
    }
});

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

// async function makeRequest(pages, limit) {
//    let url =` https://picsum.photos/v2/list?page=${pages}&limit=${limit}`;
//    let request = await fetch(url);
//    let response = await request.json();
//    localStorage.setItem(key, JSON.stringify(response));
//    clearInputs();
//    renderImage(response);   
// }

 // Переписал функцию makeRequest используя промисы (.then) 
async function makeRequest(pages, limit) {
    let url =` https://picsum.photos/v2/list?page=${pages}&limit=${limit}`;
    await fetch(url)
        .then(response => {return response.json();})
        .then(json => {localStorage.setItem(key, JSON.stringify(json));
            renderImage(json);})        
        .then(clearInputs())        
        .catch(()=> {
            alert("ошибка запроса");
        });   
 }

function renderImage(response){ 
    let picture = document.createElement('div');
    wrapper.append(picture);
    picture.classList.add('image');  
    
    response.forEach(item => {
        let itemImg= `<div class = "imgcontainer"><img class = "img" src="${item.download_url}"/></div>`;
        picture.innerHTML += itemImg;        
    });
}

function clearInputs (){
    inputPages.value = '';
    inputLimit.value = '';
}