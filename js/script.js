const square = document.querySelector(".container"); // object | null
console.log(square);
for (let i = 1; i <= 100; i++) { //creazione di 100 numeri da 1 a 100.
   let number = i;
   let myClassAdd = "blu";
    if (i % 3 === 0 && i % 5 === 0) {
        number = "FizzBuzz"; //Sostituisco il numero multiplo di 3 e di 5 con FizzBuzz.
        myClassAdd = "yellow";
    } else {
        if (i % 3 === 0) {
            number = "Fizz"; //Sostituisco il numero multiplo di 3 con Fizz.
            myClassAdd = "green";
        } else if (i % 5 === 0) {
            number = "Buzz"; //Sostituisco il numero multiplo di 5 con Buzz.
            myClassAdd = "red";
        }
    }
    const squareBox = document.createElement("div"); // object
    squareBox.innerHTML = number;
    squareBox.classList.add(myClassAdd);
    squareBox.classList.add("square");
    square.append(squareBox);
    console.log(number);
}

