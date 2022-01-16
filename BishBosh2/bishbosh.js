let bishEvent = document.querySelector('#myBtn');
let boshEvent = document.querySelector('#bashInput');
let bishEvent2 = document.querySelector('#bishInput2');

bishEvent.addEventListener('click', function(e){
 
     let countBish = 0;
     let countBosh = 0;
    
     let bish = [];
     let bosh = [];
   
    let i = 1;
    let j = 1; 
    //select the divible numbers by 3 between 1 and the given max number
    if(bishEvent2.value == 3){
        
         while(i <= boshEvent.value){
            if((i % 3) === 0){
                
                bish.push(i);
                countBish++;
                } 
                i++;              
        }

        // display the bish numbers
    document.querySelector('#firsthead').innerHTML =  `<p> Bish: ${bish} Total bish numbers: ${countBish} </p>`;
  
} 
//select the divible numbers by 3 between 1 and the given max number
else if(bishEvent2.value == 4){
        
        while(j <= boshEvent.value){
            if((j % 4) === 0){
            
            bosh.push(j);
            countBosh++;
           } 
           j++;      
        } 
    // display the bosh numbers
      document.querySelector('#firsthead').innerHTML =  `<p> Bosh: ${bosh} Total bosh numbers: ${countBosh} </p>`;     
   }
   else
   {
          alert("wrong input");
   }   
 // remove the input values after execution 
  boshEvent.value = '';
  bishEvent2.value = '';
  
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
