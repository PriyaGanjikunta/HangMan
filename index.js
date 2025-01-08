let con3 = document.querySelector(".con3");
let btn = document.querySelector(".btn");
let hd1 = document.querySelector(".hide");
let hd = document.querySelector(".hd");
let im1 = document.querySelector(".im1");
let rbtn = document.querySelector("#rbtn");
let i1;
let i2;
let i3;
// btn.onclick =function() {
//     console.log("hi");
//     console.log("Hello");
// }
// console.log(btn)

btn.addEventListener("click",() => {
    i1 = document.getElementById("c1").value;
    console.log(i1);

    i2 = document.getElementById("c3").value;
    console.log(i2);

    i3 = document.getElementById("c5").value;
    console.log(i3);

        
    if(i1=='W' && i2=='L' && i3=='O'){
        hd.style.marginTop="4%";
        hd1.style.display="block";
        hd1.innerText="Congratulations, your guess is correct!";
        im1.src="images/freee.jpg";
        im1.style.display="block";
        im1.style.height="180px";
        im1.style.width="130px";
        im1.style.marginTop="29%";
        im1.style.marginLeft="32%";   
        
    }else{
        hd.style.marginTop="4%";
        hd1.innerText="Your guess is wrong";
        im1.src="images/hang.jpg";
        im1.style.marginLeft= "25%";
        im1.style.marginTop= "8%";
        hd1.style.display="block";
        im1.style.display="block";
    }
});

rbtn.addEventListener("click", () => {
    hd1.style.display="none";
    im1.style.display="none";
    document.getElementById("c1").value = "";
    document.getElementById("c3").value = "";
    document.getElementById("c5").value = "";
});

