function countHello(number) {

    let counter = 0;

    if (number < 1 || counter > 10) {
        return "err";
    }

    const interval = setInterval(function () {
        console.log(`Hello`, counter);


        if (counter === number) {
            clearInterval(interval);
        }

        counter++;

    }, 1000); /* 1s */
}

countHello(5);