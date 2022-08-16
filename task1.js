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



let result = {};
const dParser = new DOMParser();
let xParser = dParser.parseFromString(xmlData, "text/xml");


function objCreator(xParser) {
  
    let studentNode = xParser.querySelector("student");
    let nameNode = xParser.querySelector("name");
    let firstName = xParser.querySelector("first");
    // console.log(firstName)
    let secondName = xParser.querySelector("second");
    let age = xParser.querySelector("age");
    let prof = xParser.querySelector("prof");
    let lang = nameNode.getAttribute('lang');
    let keyNode = xParser.querySelector("list");
    let keyNodeLen = xParser.querySelectorAll("list");
   //console.log ( keyNodeLen.length)

    result =  {list:[ (result),         
            {name: (firstName.textContent +' '+ secondName.textContent),
            age: age.textContent, prof:  prof.textContent, lang: lang},]
            
    };
    studentNode.remove();
   // console.log(result)
   

  
   if (keyNodeLen.length > 0) {          
    objCreator(keyNode)
    }else {return result};
}

objCreator(xParser)
console.log(result);



// console.log (keyNode)