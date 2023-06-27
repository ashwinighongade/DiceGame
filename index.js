document.getElementById("start").addEventListener("click",function(){
    sound();
    let p1=Math.floor(Math.random()*6)+1;
    let p2=Math.floor(Math.random()*6)+1;
    document.getElementById("p1").src=`Images/${p1}.png`;
    document.getElementById("p2").src=`Images/${p2}.png`;
    if (p1>p2){
        document.querySelector("h1").textContent="🎋Player 1 wins🎋"
    }
    else if (p1<p2){
        document.querySelector("h1").textContent="🎋Player 2 wins🎋"
    }
    else{
        document.querySelector("h1").textContent="🎈Oops! It's a DRAW🎈";
    };
    
});

function sound(){
    let sound = new Audio('Images/b.mp3');
    sound.play();
}