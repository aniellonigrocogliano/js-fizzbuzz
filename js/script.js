const container = document.querySelector(".container"); // object | null
console.log(container);
for (let i = 1; i <= 100; i++) { //creazione di 100 numeri da 1 a 100.
   let number = i;
   let myClassAdd = "blu"; // Imposto tutti i quadrati di colore blu.
    if (i % 3 === 0 && i % 5 === 0) {
        number = "FizzBuzz"; //Sostituisco il numero multiplo di 3 e di 5 con FizzBuzz.
        myClassAdd = "yellow"; // coloro di giallo il quadrato FizzBuzz.
    } else {
        if (i % 3 === 0) {
            number = "Fizz"; //Sostituisco il numero multiplo di 3 con Fizz.
            myClassAdd = "green"; // coloro di verde il quadrato Fizz.
        } else if (i % 5 === 0) {
            number = "Buzz"; //Sostituisco il numero multiplo di 5 con Buzz.
            myClassAdd = "red"; // coloro di rosso il quadrato Buzz.
        }
    }
    const square = document.createElement("div"); // object
    square.innerHTML = number;
    square.classList.add(myClassAdd);
    square.classList.add("square");
    container.append(square);
    console.log(number);
}

