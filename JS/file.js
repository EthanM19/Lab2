console.log("Hello World");

const d = new Date();
document.getElementById("yeardate").innerHTML = d.getFullYear();

const showAlert = () => {
   
    alert('Breaking News! Im a cool dude');
}

const buttonElement = document.getElementById('showAlertButton');

buttonElement.addEventListener('click', showAlert);

buttonElement.innerText = 'Click!';

buttonElement.addEventListener('mouseover', () => {
    buttonElement.innerText = 'Me';
});

buttonElement.addEventListener('mouseleave', () => {
    buttonElement.innerText = 'Click!';
});


    
let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     if(count % 2 == 0) {
     document.getElementById('txt-counter').classList.add('even');
     document.getElementById('txt-counter').classList.remove('odd');
     } else {
      document.getElementById('txt-counter').classList.add('odd');
      document.getElementById('txt-counter').classList.remove('even');
     }
     document.getElementById('txt-counter').innerHTML = `Number: ${count}`;}
 
for (let i = 1; i <= 100; i = i + 1) {
var listItem  = document.createElement("li")

   document.getElementById('numbers').appendChild(listItem);
  if(i % 2 == 0) {listItem.textContent = 'even'
    } else {listItem.textContent = 'odd'

    }
  }


  