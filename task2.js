// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

let jsonData = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

   let employees = JSON.parse(jsonData);
   console.log(employees);