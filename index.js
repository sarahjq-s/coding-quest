let pointEl = document.getElementById("point-el")
let rewardPoint = 0

const threePt = document.querySelectorAll("#btn-three-pt")
const onePt = document.querySelectorAll("#btn-one-pt")

for(let i = 0; i < threePt.length; i++){
threePt[i].addEventListener("click", function(){
    rewardPoint += 3;
    pointEl.textContent += rewardPoint;    

})
}

for(let i = 0; i < onePt.length; i++){
onePt[i].addEventListener("click", function(){
        rewardPoint += 1;
        pointEl.textContent += rewardPoint;    
        
})
}
