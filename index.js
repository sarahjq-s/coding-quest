//Grab point-el element and store in variable
let pointEl = document.getElementById("point-el")

//set point to 0
let rewardPoint = 0

//ADD Main Quest
const addMainQbtn = document.querySelector(".add-main-btn");
const addSideQbtn = document.querySelector(".add-side-btn");

//Grab button points element and store in variable
const threePt = document.getElementsByClassName("btn-three-pt")
const onePt = document.querySelectorAll("#btn-one-pt")


let ulMainEl = document.querySelector(".ul-main-el");

addMainQbtn.addEventListener("click", function(){
    const myMainQuests = []
    
    const inputMainEl = document.querySelector(".input-main-el").value;  
    myMainQuests.push(inputMainEl);
    for(let i = 0; i < myMainQuests.length; i++){
        // ulMainEl.innerHTML = `
        //     <li>
        //      ${myMainQuests[i]}
        //     </li>`;    
        const mainli = document.createElement("li");
        mainli.textContent = myMainQuests[i];
        ulMainEl.append(mainli);    
        
        createButton(ulMainEl)
    }
})
//ADD Side Quest

addSideQbtn.addEventListener("click", function(){
    const mySideQuests = []
    
    const ulSideEl = document.querySelector(".ul-side-el");
    const inputSideEl = document.querySelector(".input-side-el").value;  
    mySideQuests.push(inputSideEl);
    for(let i = 0; i < mySideQuests.length; i++){
        const sideli = document.createElement("li");
        sideli.textContent = mySideQuests[i];
        ulSideEl.append(sideli);
        createButton(ulSideEl)
    }
})

function createButton(ulEl){
    if(ulMainEl){
        const buttonThree = document.createElement("button");
    
    ulEl.append(buttonThree);  
    buttonThree.onclick = function(){
    rewardPoint += 3;
    pointEl.textContent = "Points: " + rewardPoint; 
    console.log("button for three points clicked")  
    }
    }else if(ulSideEl){
        const buttonOne = document.createElement("button");
    ulEl.append(buttonOne);    
    buttonOne.onclick = function(){
    rewardPoint += 1;
    pointEl.textContent = "Points: " + rewardPoint;   
    console.log("button for one point clicked")  
    }
    }
}









//EARNING POINTS
//log three Points

// threePt.addEventListener("click", function(){
//     rewardPoint += 3;
//     pointEl.textContent = "Points: " + rewardPoint;    

// })

//log one point
for(let i = 0; i < onePt.length; i++){
onePt[i].addEventListener("click", function(){
        rewardPoint += 1;
        pointEl.textContent = "Points: " + rewardPoint;
        
})
}
