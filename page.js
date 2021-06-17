var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function togglemenu(){
    if(menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "150px";
    }
    else{
        menulist.style.maxHeight = "0px";

    }
}
var nmb1 = document.getElementById("nmb");
function myFunction() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
  var b =  "rgb(" + x + "," + y + "," + z + ")";
  var n =  "rgb(" + 0 + "," + 0 + "," + 0 + ")";
  var m =  "rgb(" + 255 + "," + 255 + "," + 255 + ")";
  if( b == n ){
    nmb1.style.color = "white";
    
  }
}


var x = 0;

function pluscountFunction(){
    document.getElementById("nmb").innerHTML = ++x;
   
}
function minuscountFunction(){
    document.getElementById("nmb").innerHTML = --x;
   
}
function clearcountFunction(){
   document.getElementById("nmb").innerHTML = x = x * 0;
 
}


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function modeFunction(){
  modal.style.display = "block";
}
span.onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
function submitAnswer(){

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Scripting" ) {
    alert('Answer is correct !');
  } else {
    alert('Answer is wrong');
  }
};

