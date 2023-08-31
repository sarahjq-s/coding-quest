//Grab point-el element and store in variable
let pointEl = document.getElementById("point-el")

//set point to 0
let rewardPoint = 0

//Main Quest
const addMainQbtn = document.querySelector(".add-main-btn");

addMainQbtn.addEventListener("click", function(){
    const myMainQuests = []
    const ulMainEl = document.querySelector(".ul-main-el");
    const inputMainEl = document.querySelector(".input-main-el").value;
    myMainQuests.push(inputMainEl);

    for(let i = 0; i < myMainQuests.length; i++){
        const mainLi = document.createElement("li");
        mainLi.textContent = myMainQuests[i];
        ulMainEl.append(mainLi);   
        ulMainEl.value = ""; 
        
        mainLi.addEventListener("click", function(){
        mainLi.style.backgroundColor = "#fff3b0";
        mainLi.style.setProperty("text-decoration", "line-through")
        rewardPoint += 3;
        pointEl.textContent = "Points: " + rewardPoint;
        console.log("button for three points clicked");  
        
    }) 
}})



//Side Quest
const addSideQbtn = document.querySelector(".add-side-btn");

addSideQbtn.addEventListener("click", function(){
    const mySideQuests = []
    const ulSideEl = document.querySelector(".ul-side-el");
    const inputSideEl = document.querySelector(".input-side-el").value;  
    mySideQuests.push(inputSideEl);
    for(let i = 0; i < mySideQuests.length; i++){
        const sideLi = document.createElement("li");
        sideLi.textContent = mySideQuests[i];
        ulSideEl.append(sideLi);

        sideLi.addEventListener("click", function(){
        sideLi.style.backgroundColor = "#fff3b0";
        sideLi.style.setProperty("text-decoration", "line-through")
        rewardPoint += 1;
        pointEl.textContent = "Points: " + rewardPoint; 
        console.log("button for one point clicked");  
        }) 
       
    }
})

