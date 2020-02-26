'use strict';


const button = document.querySelector('button');
const div = document.querySelector('#result');
const inputPlace = document.querySelector('input').placeholder ='Wprowadź maksymalną liczbę \'n\'';


const selCollection = document.querySelector('#inputGroupSelect03').onchange = function(){
    const value = document.querySelector('#inputGroupSelect03').value;

    button.addEventListener('click', () => {   
        const input = parseInt(document.querySelector('input').value);
        div.innerText = '';
        if (input <= 0 || isNaN(input)) {
            div.innerText = "Niepoprawna wartość";}
        // wypisuje kolejne liczby naturalne od 1 ---> n, gdzie n - to maksymalna liczba
        if (value == 0){
                for(let i = 1; i <= input; i++){                
                    div.innerHTML += `${i}<br>`;   
                } 
        }       
        // wypisuje liczby parzyste od 0 ---> n, gdzie n określa ich ilość
        if (value == 1){
                for(let i = 0; i < input; i++)
                div.innerHTML += `${2*i}<br>`;
            }        
        // wypisuje parzyste liczby od 0 ---> n, gdzie n oznacza maksymalną liczbę 
        if (value == 2){
            for (let i = 0; i <= input; i++) { 
                if (i%2 == 0)
                    div.innerHTML += `${i}<br>`;
                }}
    })
}


    
        
    
  
   

