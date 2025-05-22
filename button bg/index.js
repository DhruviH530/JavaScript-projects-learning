const btn = document.getElementById("btn");
// background colour chanheg mate 

let randomColor = ()=>{
        const r = Math.floor(Math.random()* 256);
        const g = Math.floor(Math.random()* 256);
        const b = Math.floor(Math.random()* 256);
        return `rgb(${r} , ${g} , ${b})`;

}

btn.addEventListener('click',()=>{
        document.body.style.backgroundColor = randomColor();
});



// 2 bcakground colour leniear-grading krva



// btn.addEventListener('click',()=>{
//        document.body.style.background ="linear-gradient(to right, pink , purple)";
// });




