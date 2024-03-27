let number = -1;
for (let i = 1; i <= 100; i++) { //creazione di 100 numeri da 1 a 100.
    number = i;
    if (i % 3 === 0 && i % 5 === 0) {
        number = "FizzBuzz"; //Sostituisco il numero multiplo di 3 e di 5 con FizzBuzz.
    } else {
        if (i % 3 === 0) {
            number = "Fizz"; //Sostituisco il numero multiplo di 3 con Fizz.
        } else if (i % 5 === 0) {
            number = "Buzz"; //Sostituisco il numero multiplo di 5 con Buzz.
        }
    }
    console.log(number);
}

