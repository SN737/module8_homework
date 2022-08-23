// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код,
//  который будет преобразовывать XML в JS-объект и выводить его в консоль.

let xmlData = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

let result = [];
const dParser = new DOMParser();
let xParser = dParser.parseFromString(xmlData, "text/xml");
let studentsNode = xParser.querySelectorAll("student");

studentsNode.forEach(nodeItem => {
  let person = {
    name:`${nodeItem.querySelector("first").textContent} ${nodeItem.querySelector("second").textContent}`,
    age: nodeItem.querySelector("age").textContent,
    prof: nodeItem.querySelector("prof").textContent,
    lang: nodeItem.querySelector("name").getAttribute("lang")
  };
  result.push(person);
});

console.log(result);