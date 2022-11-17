var count = 0;

function createNew1() {
    count++;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "task" + count);
    newDiv.setAttribute("class", "task");
    newDiv.draggable="true";

    // textarea
    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "task_input" + count);
    textarea.setAttribute("class", "task_input");
    textarea.placeholder = placeholder="Enter a task";
    textarea.setAttribute("draggable", "false");
    newDiv.appendChild(textarea);

    // delete button
    const delete_btn = document.createElement("input");
    delete_btn.type = "button";
    delete_btn.value = "delete";
    delete_btn.setAttribute("id", "deleteId");
    delete_btn.setAttribute("class", "delete_btn");
    delete_btn.setAttribute("onclick", "deleteBtn(this)");
    newDiv.appendChild(delete_btn);


    const currentDiv = document.getElementById("block_items1");
    currentDiv.appendChild(newDiv);
    document.getElementById("task_input" + count).focus();
    newDiv.ondragstart = dragStart;
    newDiv.ondragend = dragEnd;
    newDiv.ondragover = dragOver;

    textarea_fix();
}

function createNew2() {
    count++;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "task" + count);
    newDiv.setAttribute("class", "task");
    newDiv.draggable="true";

    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "task_input" + count);
    textarea.setAttribute("class", "task_input");
    textarea.placeholder = placeholder="Enter a task";
    newDiv.appendChild(textarea);

    // delete button
    const delete_btn = document.createElement("input");
    delete_btn.type = "button";
    delete_btn.value = "delete";
    delete_btn.setAttribute("id", "deleteId");
    delete_btn.setAttribute("class", "delete_btn");
    delete_btn.setAttribute("onclick", "deleteBtn(this)");
    newDiv.appendChild(delete_btn);

    const currentDiv = document.getElementById("block_items2");
    currentDiv.appendChild(newDiv);
    document.getElementById("task_input" + count).focus();
    newDiv.ondragstart = dragStart;
    newDiv.ondragend = dragEnd;
    newDiv.ondragover = dragOver;

    textarea_fix();
}

function createNew3() {
    count++;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "task" + count);
    newDiv.setAttribute("class", "task");
    newDiv.draggable="true";

    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "task_input" + count);
    textarea.setAttribute("class", "task_input");
    textarea.placeholder = placeholder="Enter a task";
    newDiv.appendChild(textarea);

    // delete button
    const delete_btn = document.createElement("input");
    delete_btn.type = "button";
    delete_btn.value = "delete";
    delete_btn.setAttribute("id", "deleteId");
    delete_btn.setAttribute("class", "delete_btn");
    delete_btn.setAttribute("onclick", "deleteBtn(this)");
    newDiv.appendChild(delete_btn);

    const currentDiv = document.getElementById("block_items3");
    currentDiv.appendChild(newDiv);
    document.getElementById("task_input" + count).focus();
    newDiv.ondragstart = dragStart;
    newDiv.ondragend = dragEnd;
    newDiv.ondragover = dragOver;

    textarea_fix();
}


function deleteBtn(btn) {
    btn.parentNode.remove();
}

function textarea_fix() {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + 20 + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight)-24 + "px";
    }
}




// DRAG AND DROP



const todo_div = document.getElementById("block_items1");
const doing_div = document.getElementById("block_items2");
const did_div = document.getElementById("block_items3");

todo_div.ondragover = dragOver;
todo_div.ondrop = onDrop;
doing_div.ondragover = dragOver;
doing_div.ondrop = onDrop;
did_div.ondragover = dragOver;
did_div.ondrop = onDrop;

function dragOver(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData('elem_data', ev.target.id);
    ev.dataTransfer.setData('elem_class', ev.target.className);
    setTimeout(() => {
        ev.target.classList.add("hide");
    }, 0);
}

function dragEnd(ev) {
    ev.target.classList.remove("hide");
}

function onDrop(ev) {
    let itemId = ev.dataTransfer.getData('elem_data');
    let itemClass = ev.dataTransfer.getData('elem_class');
    // console.log(itemId);
    // console.log(itemClass);
    
    // console.log(ev.target.className);
    if (itemClass == "task" &&  ev.target.className != "task" && ev.target.className != "task_input" && ev.target.className != "delete_btn") {
        ev.target.append(document.getElementById(itemId));
    }
}