function sumMix(x){
    let val =0;
    for (let key of x){
        if (!isNaN(key)){
       val += Number(key);
    }
}
           return val
    }
    
console.log(sumMix(["10", "love", "40"]));
console.log(sumMix(["5", "0", 9, 3]));   
console.log(sumMix(["1", "2", "3"]));  