const randomNumber1 = Math.floor(Math.random()*6 + 1);
const randomimg1 = "dice" + randomNumber1 + ".png";
const randomsource1 = "images/" + randomimg1;
const img1 = document.getElementById("img1");
img1.setAttribute("src",randomsource1);

const randomNumber2 = Math.floor(Math.random()*6 + 1);
const randomimg2 = "dice" + randomNumber2 + ".png";
const randomsource2 = "images/" + randomimg2;
const img2 = document.getElementById("img2");
img2.setAttribute("src",randomsource2);



if (randomNumber1>randomNumber2){

document.querySelector("h1").innerHTML = "Player-1 wins!"

}
else if (randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML = " Its a Draw play again"


}
else{

    document.querySelector("h1").innerHTML = "Player-2 wins!"
  
}