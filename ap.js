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

// now we create decrement button 
let decrementBtn = document.createElement('button');
let decrementBtnText = document.createTextNode('Decrement');
decrementBtn.appendChild(decrementBtnText);
decrementBtn.setAttribute('onclick','decreasing()');
console.log(decrementBtn);

// now we create reset button 
let resetBtn = document.createElement('button');
let resetBtnText = document.createTextNode('Reset');
resetBtn.appendChild(resetBtnText);
resetBtn.setAttribute('onclick','resetting()');
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
getmainDiv.style.borderRadius = '50%'
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
 

let getheading = document.getElementById('heading');
getheading.style.color = 'red';