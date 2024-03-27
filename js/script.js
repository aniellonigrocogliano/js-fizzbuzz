let number = -1;
for (let i = 0; i <= 100; i++) { //creazione di 100 numeri da 1 a 100.
    number = i;
    
    if (i % 3 === 0) {
        number = "Fizz";
    }
    console.log(number);
}