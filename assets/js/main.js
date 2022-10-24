for(let x = 1; x <= 100; x++){

    let div = document.createElement('div')
    div.innerText = ""
    if(x % 3 == 0 && x % 5 == 0) {
        div.innerText += "FizzBuzz";
        div.classList.add("red");
    } else if(x % 5 == 0) {
        div.classList.add("yellow");
        div.innerText += "Buzz";
    } else if(x % 3 == 0) {
        div.classList.add("green");
        div.innerText += "Fizz";
    } else {
        div.innerText += x;
        div.classList.add("blu");
    }
    document.getElementById('box-cont').append(div);
}
