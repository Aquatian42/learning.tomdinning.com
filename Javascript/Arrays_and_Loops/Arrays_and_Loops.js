

document.addEventListener('DOMContentLoaded', () => {
    
//Task1
let outputDiv = document.querySelector('.task1');
for (let i = 10;i > 0; i--){
    const div = document.createElement('p');
    div.textContent = i
    outputDiv.appendhild(div)
}

  
//Task2

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const refused = document.querySelector('.refused')
const admitted = document.querySelector('.admitted')
for (person of people) {
    if (person == "Phil" || person == "Lola")  {
        refused.textContent += person + " ,"
    } 
    else{
        admitted.textContent += person + " ,"
    }
    console.log(admitted.textContent)
}

//Loops1
outputDiv = document.querySelector('.loops1');
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');
for (element of myArray){
    const li = document.createElement('li');
    li.textContent = element
    list.appendChild(li)
}
outputDiv.appendChild(list)




//Loops2

const nameToSearch = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

for (let i = 0; i < phonebook.length;i++){
    if (phonebook[i].name == nameToSearch){
        para.textContent = `${phonebook[i].name}'s number is: ${phonebook[i].number}` 
    }
    console.log(para.textContent)
}
outputDiv = document.querySelector(".loops2");
outputDiv.appendChild(para);



//Loops 3
outputDiv = document.querySelector(".loops3")
const isPrime = (input) => {
    let i = 2;
    while (i < (input/2)){
        if (input % i == 0){
            return false
        }  
        i++
    }
    return true
}
const parag = document.createElement('p');
for (let i = 500;i > 0;i--){
    if (isPrime(i)) {
        parag.textContent += `${i}, `
    }
}
outputDiv.appendChild(parag);


});

