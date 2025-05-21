const btn = document.getElementById("btn");

const colors = ["orange" , "red" , "green" , "blue" ,"yellow" , "pink"];

let index = 0;


const changeColor = () =>{
    btn.style.backgroundColor = colors[index];
    index = (index +1) % colors.length;
};

btn.addEventListener("click",changeColor);
window.addEventListener("load" , changeColor);