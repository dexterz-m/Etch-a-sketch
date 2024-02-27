
// Grid

// Setting up deafult settings for grid

const container = document.querySelector('#container');

let grids = 16;

var color = "black";

// Making grid

function makeGrid(grids){
    for(let i = 0; i < grids; i++){
        for(let j = 0; j < grids; j++){
            let gridElement = document.createElement('div');
            gridElement.classList.add('gridElement')
            container.appendChild(gridElement);

            gridElement.addEventListener('mouseenter', deafultColor);
        }
    }
}

makeGrid(grids)


// Change grid depending on user input

function changeGrid(count){

    let gridCount = parseInt(prompt("Enter grid count (max:64)"))

    if(gridCount <= 64 && gridCount >= 2){

        const boxes = document.querySelectorAll('.gridElement');

        boxes.forEach(box =>{
            box.remove();
        })

        count = document.getElementById("container").style.cssText = "grid-template-columns: repeat("+gridCount+",1fr); grid-template-rows: repeat("+gridCount+",1fr);"
        makeGrid(gridCount)
    }
    else{
        gridCount = parseInt(prompt("Enter grid count (max:64)"));
    }
    
}

// Color that will be used after startup

function deafultColor(){
    this.style.backgroundColor = color;
}

// Color that is changed depending on color button

function changeColor(newColor){
    color = newColor;
}

// Eraser mode

function eraser(){
    color = 'white';
}

// Function to clear grid in 1 click

function clearGrid(){

    const boxes = document.querySelectorAll('.gridElement');

    boxes.forEach(box =>{
        box.style.backgroundColor = 'white';
    })

}