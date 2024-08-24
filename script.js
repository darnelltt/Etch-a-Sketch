const containerEl = document.querySelector("#container")

const button = document.querySelector("#clearButton")

function inputDiv(numDiv){
    let cellDimensions = ((600 / numDiv) - 2).toFixed(2);
    let gridSize = Math.pow(numDiv,2);

    while(gridSize>0){
        let newDiv = document.createElement("div")
        containerEl.appendChild(newDiv)
        newDiv.classList.add('grid')
        newDiv.style.height = cellDimensions + "px"
        newDiv.style.width  = cellDimensions + "px"
        newDiv.style.border = "1px solid blue"
        gridSize-- 

    }

    let gridCells = document.querySelectorAll(".grid")
    gridCells.forEach(cell => cell.addEventListener("mouseenter", changeColor))
    console.log(cellDimensions)
    console.log('Grid has been created!')  

}

function changeColor(){
    this.style.backgroundColor = '#630330'
}

function clear(){
    let inputGridSize = prompt('How many squares per side?')

    if (inputGridSize >= 1 && inputGridSize <= 100){
        while (containerEl.hasChildNodes()) {
            containerEl.removeChild(containerEl.lastChild)
        }
        inputDiv(inputGridSize)
    }
    else{
        alert ('Enter a number between 1-100')
        clear()
    }
}

button.addEventListener('click', clear)
window.onload = inputDiv(16)