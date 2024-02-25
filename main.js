
// Grid
const container = document.querySelector('#container');

let grids = 16;

function makeGrid(grids){
    for(let i = 0; i < grids; i++){
        for(let j = 0; j < grids; j++){
            let gridElement = document.createElement('div');
            gridElement.classList.add('gridElement')
            container.appendChild(gridElement);
        }
    }
}

makeGrid(grids)

function changeGrid(count){

    let gridCount = parseInt(prompt("Enter grid count (max:64)"))

    if(gridCount <= 64 && gridCount >= 2){
        count = document.getElementById("container").style.cssText = "grid-template-columns: repeat("+gridCount+",auto); grid-template-rows: repeat("+gridCount+",auto);"
        makeGrid(gridCount)
    }
    else{
        gridCount = parseInt(prompt("Enter grid count (max:64)"));
    }
    
}
