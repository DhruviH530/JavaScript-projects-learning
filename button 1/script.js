const btn = document.getElementById("btn");

let randomNum = ()=>{
    return Math.floor(Math.random() * 256);  //rgb range we have to define **
};

let changeColor = () => {
    let randomColor = `rgb(${randomNum()},${
    randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
  
};

btn.addEventListener("click" , changeColor);
window.addEventListener("load", changeColor);





// const btn = document.querySelector(".btn");

// let randomNum = () => {
//     return Math.floor(Math.random() * 256);
// };

// let changeColor = () => {
//     let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
//     document.body.style.backgroundColor = randomColor;
// };

// btn.addEventListener("click", changeColor);
// window.addEventListener("load", changeColor);
