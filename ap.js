// we create simple 
// first we create main div
let mainDiv = document.createElement('div');
mainDiv.setAttribute('id','mainDiv');
mainDiv.setAttribute('class','mainDivClass');
console.log(mainDiv)
// first we create a h1 by dom
let heading = document.createElement('h1');
let headingContent = document.createTextNode('Simple Counter');
heading.appendChild(headingContent);
console.log(heading);
heading.setAttribute('id','heading');
heading.setAttribute('class','headingclass');
// now we create a div for show result
let result = document.createElement('div');
result.setAttribute('id','resultDiv');
// now we create Increment button
let IncrementBtn = document.createElement('button');
let IncrementBtnText = document.createTextNode('Increment');
IncrementBtn.appendChild(IncrementBtnText);
console.log(IncrementBtn);
// now we create onclik attribute in IncrementBtn
IncrementBtn.setAttribute('onclick','increasing()');
IncrementBtn.setAttribute('id','incrementbtn')

// now we create decrement button 
let decrementBtn = document.createElement('button');
let decrementBtnText = document.createTextNode('Decrement');
decrementBtn.appendChild(decrementBtnText);
decrementBtn.setAttribute('id','decrementBtnid')
decrementBtn.setAttribute('onclick','decreasing()');
console.log(decrementBtn);

// now we create reset button 
let resetBtn = document.createElement('button');
let resetBtnText = document.createTextNode('Reset');
resetBtn.appendChild(resetBtnText);
resetBtn.setAttribute('onclick','resetting()');
resetBtn.setAttribute('id','resetBtnid');
console.log(resetBtn);
// now we reder all created elements on dom 
mainDiv.appendChild(heading);
mainDiv.appendChild(result);
mainDiv.appendChild(IncrementBtn);
mainDiv.appendChild(decrementBtn);
mainDiv.appendChild(resetBtn);

document.body.appendChild(mainDiv);

// now we apply css by js
let getmainDiv = document.getElementById('mainDiv');
getmainDiv.style.background = 'white';
getmainDiv.style.borderRadius = '10px'
getmainDiv.style.display = 'flex';
getmainDiv.style.flexDirection = 'column';
getmainDiv.style.justifyContent = 'center';
getmainDiv.style.alignItems = 'center';
getmainDiv.style.height = '300px';
getmainDiv.style.width = '300px';
getmainDiv.style.border = '2px solid black';
document.body.style.background = 'seagreen'
document.body.style.height = '100vh';
document.body.style.margin = '0'
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
 
// we apply css on heading
let getheading = document.getElementById('heading');
getheading.style.color = 'purple';
// now style resul div
let getresultDiv = document.getElementById('resultDiv');
getresultDiv.style.height = '80px';
getresultDiv.style.width = '80px';
getresultDiv.style.border = '2px solid black';
getresultDiv.style.background = 'silver';
getresultDiv.style.borderRadius = '50%';
getresultDiv.style.display = 'flex';
getresultDiv.style.justifyContent = 'center';
getresultDiv.style.alignItems = 'center';
getresultDiv.style.fontSize = '40px';
// Increment btn style 
let getincrementBtn = document.getElementById('incrementbtn');
getincrementBtn.style.background = 'pink';
getincrementBtn.style.padding = '4px 12px';
getincrementBtn.style.fontSize = '20px';
getincrementBtn.style.borderRadius = '10px';
getincrementBtn.style.marginTop = '5px';
// now style decrement btn
let getDecrementBtn = document.getElementById('decrementBtnid');
getDecrementBtn.style.background = 'pink';
getDecrementBtn.style.padding = '4px 8px';
getDecrementBtn.style.fontSize = '20px';
getDecrementBtn.style.borderRadius = '10px';
getDecrementBtn.style.marginTop = '5px';
// now style reset btn 
let getresetbtn = document.getElementById('resetBtnid');
getresetbtn.style.background = 'pink';
getresetbtn.style.padding = '4px 30px';
getresetbtn.style.fontSize = '20px';
getresetbtn.style.borderRadius = '10px';
getresetbtn.style.marginTop = '5px';

// now we create functionality
let count = 0;
function increasing(){count++;
     document.getElementById('resultDiv').innerHTML = count;
}


function decreasing(){if(count > 0){count--;
   document.getElementById('resultDiv').innerHTML = count;
}}

function resetting(){ document.getElementById('resultDiv').innerHTML = '';}