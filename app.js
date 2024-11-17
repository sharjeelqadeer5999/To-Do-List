let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

// add button disable

input.addEventListener("keyup", () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active")
    }
})

// add new items to list

addBtn.addEventListener("click", () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `<p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa fa-edit"></i>
            <i class="fa fa-trash"></i>
        </div>`
        tasks.append(newItem);
        input.value = "";
    } else {
        alert("please enter a task")
    }
})

// add delete item from list

tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.parentElement.remove();
    }
})

// marks item as completed

tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-edit")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
})