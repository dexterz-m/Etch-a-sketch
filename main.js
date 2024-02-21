
// Grid

const container = document.querySelector('.container');

let grids = 16

function makeGrid(grids){
    for(let i = 0; i < grids; i++){
        for(let j = 0; j < grids; j++){
            const gridElement = document.createElement('div');
            gridElement.classList.add('gridElement')
            container.appendChild(gridElement);
        }
    }
}

makeGrid(grids)