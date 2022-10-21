

for(let x = 1; x <= 100; x++){
    let li = document.createElement('li')
    li.innerText = ""
    if(x % 3 == 0 && x % 5 == 0){
        li.innerText += "FizzBazz";
    }else if(x % 5 == 0) {
        li.innerText += "Buzz";
    }else if(x % 3 == 0){
        li.innerText += "Fizz";
    }else{
        li.innerText += x;
    }
    document.getElementById('lista').appendChild(li);
}
