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

let dParser = new DOMParser();
let xParser = dParser.parseFromString(xmlData, "text/xml");
let keyNode = xParser.querySelector("list");
let studentNode = xParser.querySelector("student");
let nameNode = xParser.querySelector("name");
let firstName = xParser.querySelector("first");
let secondName = xParser.querySelector("second");
                                      

let lang = nameNode.getAttribute('lang');

let result = {
    list: [
        {name: (firstName.textContent +' '+ secondName.textContent)},
        {age: age.textContent}
    ]

}
console.log(result);