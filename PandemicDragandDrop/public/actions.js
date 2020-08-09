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
        if ( dragElemData=="mask"){
            
            alert("Nice Job!");
            document.getElementById("video").src = "https://www.youtube.com/embed/lnP-uMn6q_U" ;
        }
        if ( dragElemData=="sanitizer"){

            alert("Nice Job!");
            document.getElementById("video").src = "https://www.youtube.com/embed/YBGsoimPXZg" ;

        }
        if ( dragElemData=="ruler"){

            alert("Nice Job!");
            document.getElementById("video").src = "https://www.youtube.com/embed/KXUT62G-IcU" ;
             

        }
        if ( dragElemData=="soap"){

            alert("Nice Job!");
            document.getElementById("video").src = "https://www.youtube.com/embed/zUiciBFdMj8" ;
            

        }
        
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