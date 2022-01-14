let bishEvent = document.querySelector('#myBtn');
let boshEvent = document.querySelector('#bashInput');


bishEvent.addEventListener('click', function(e){
     let countLoop = 0;
     let countBish = 0;
     let countBosh = 0;
     let countBishBosh = 0;
     let bish = [];
     let bosh = [];
     let bishBosh = [];
    for(let i = 1; i <= boshEvent.value; i++){
        if(i % 3 === 0 && i % 4 === 0){
            //console.log("bish-bosh");
            bishBosh.push(i);
            countBishBosh++;
        }else if ((i % 3) === 0){
            //console.log("bish");
            bish.push(i);
            countBish++;
        } else if ((i % 4) === 0){
            //console.log("bosh");
            bosh.push(i);
            countBosh++;
        } 
        countLoop++;
    }
    
   document.querySelector('#firsthead').innerHTML +=  `<p> Bish: ${bish} Total bish numbers: ${countBish} </p>`;
   document.querySelector('#firsthead').innerHTML +=  `<p> Bosh: ${bosh} Total bish numbers: ${countBosh} </p>`;
   document.querySelector('#firsthead').innerHTML +=  `<p> Bish-Bosh: ${bishBosh} Total bish numbers: ${countBishBosh} </p>`;
});






//console.log(window);
//console.log(document.body.children);
//function Calculate(){
//if(document.getElementById("myBtn").onclick){
//    let x = document.getElementById("bashInput").innerText;
//    document.getElementById("firsthead").innerHTML = x;
//}
//
//}
//Calculate();
