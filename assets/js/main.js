for(let x = 1; x <= 100; x++){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(x + ' FizzBazz');
    }else if(x % 5 == 0) {
        console.log(x + ' Bazz');
    }else if(x % 3 == 0){
        console.log(x + ' Fizz');
    }else{
        console.log(x)
    }
    
}