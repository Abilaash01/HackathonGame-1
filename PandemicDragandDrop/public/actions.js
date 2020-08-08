const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  // elem.addEventListener("drag", drag);
  // elem.addEventListener("dragend", dragEnd);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
    if(!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
    }
}

function dragOver(event) {
    if(!event.target.classList.contains("dropped")) {
        event.preventDefault();
    }
}

function dragLeave(event) {
    if(!event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover");
    }
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    
    const dragElemData = event.dataTransfer.getData("text");
    const dropElemData = event.target.getAttribute("data-draggable-id");
    const match = (dragElemData === dropElemData);

    if(match) {
        const dragElem = document.getElementById(dragElemData);
        event.target.classList.add("dropped");
        event.target.style.backgroundColor = window.getComputedStyle(dragElem).color;
        dragElem.classList.add("dragged");
        dragElem.setAttribute("draggable", "false");
        event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
    } else {
        alert("Oops! That's not where that one goes. Let's try a different box.");
    }
}