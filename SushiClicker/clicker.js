let points = 0;
let sourceVar = document.querySelector("pts");

let canClick = true;

function sushi()
{
    if(canClick)
    {
        canClick = false;
        points++;
        sourceVar.innerHTML = "Points : " + points;
        document.querySelector("img").style.maxHeight = "50px";
    
        setTimeout(growBack, 200);
    }
}

function growBack()
{
    document.querySelector("img").style.maxHeight = "512px";
    canClick = true;
}