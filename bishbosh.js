function BishBosh() {
let bishBosh = [];
for(let i = 1; i <= 100; i++){
    
    if (i % 3 === 0 && i % 4 === 0){
        bishBosh.push('Bish-Bosh');
    }else if ((i % 3) === 0){
        bishBosh.push('Bish');
    } else if ((i % 4) === 0){
        bishBosh.push('Bosh');
    } else {
        bishBosh.push(i);
    }
    
}
bishBosh.forEach((element) => console.log(element));
}
BishBosh();