let areas = {
    a:null,
    b:null,
    c:null
};

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("dragover", dragOver);
    area.addEventListener("dragleave", dragLeave);
    area.addEventListener("drop", drop);
});

document.querySelectorAll(".neutralArea").forEach(area => {
    area.addEventListener("dragover", dragOverNeutral);
    area.addEventListener("dragleave", dragLeaveNeutral);
    area.addEventListener("drop", dropNeutral);
});

//Functions Item
function dragStart(event) {
    event.currentTarget.classList.add("dragging");
}

function dragEnd(event) {
    event.currentTarget.classList.remove("dragging");
}


/**
 * Function Area
 */
function dragOver(event) {
    if(event.currentTarget.querySelector(".item") === null)
    {
        event.preventDefault();
        event.currentTarget.classList.add("hover");
    }
    
}

function dragLeave(event) {
    event.currentTarget.classList.remove("hover");
}

function drop(event) {
    event.currentTarget.classList.remove("hover");
    let dragItem = document.querySelector(".item.dragging")

    if(event.currentTarget.querySelector(".item") === null){
        event.currentTarget.appendChild(dragItem);
    }
    updateAreas();
}

/**
 * Function Neutral Area
 */

function dragOverNeutral(event) {
    event.preventDefault();
    event.currentTarget.classList.add("hover");
}

function dragLeaveNeutral(event) {
    event.currentTarget.classList.remove("hover");
}

function dropNeutral(event) {
    event.currentTarget.classList.remove("hover");
    let dragItem = document.querySelector(".item.dragging");
    event.currentTarget.appendChild(dragItem);
    updateAreas();
}

//Logic functions

function updateAreas() {
   document.querySelectorAll(".area").forEach(area => {
       let name = area.getAttribute("data-name");
       
       if (area.querySelector(".item") !== null) { // foi adicionado dentro da classe 'area' la na função 'drop'
           areas[name] = area.querySelector(".item").innerHTML;
       }
       else
       {
           areas[name] = null;
       }
   });
   if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
       document.querySelector('.areas').classList.add('correct');
   }
   else
   {
    document.querySelector('.areas').classList.remove('correct');
   }
}