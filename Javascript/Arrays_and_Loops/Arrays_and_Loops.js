

document.addEventListener('DOMContentLoaded', () => {
    
//Task1
let outputDiv = document.querySelector('.task1');
for (let i = 10;i > 0; i--){
    const div = document.createElement('p');
    div.textContent = i
    outputDiv.appendChild(div)
}

  
//Task2

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
outputDiv = document.querySelector('.task2')
const refused = document.createElement('p')
const admitted = document.createElement('p')
outputDiv.appendChild(admitted)
outputDiv.appendChild(refused)
for (person of people) {
    if (person == "Phil" || person == "Lola")  {
        refused.textContent += person + " ,"
    } 
    else{
        admitted.textContent += person + " ,"
    }
    console.log(admitted.textContent)
}



});