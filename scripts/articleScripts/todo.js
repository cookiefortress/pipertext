console.log("Todo script loaded!");

let currentList = 0;

class TodoItem {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = false;
  }

  toggleIsComplete() {
    if (this.isComplete === false) {
      this.isComplete = true;
    } else if (this.isComplete === true) {
      this.isComplete = false;
    }
  }
}

class TodoList {
  static listArray = [];
  constructor(name) {
    this.name = name;
    this.todoItems = [];
    TodoList.listArray.push(this);
  }

  newTodo(name, desc, dueDate, priority) {
    let todo = new TodoItem(name, desc, dueDate, priority);
    this.todoItems.push(todo);
  }

  sortTodos() {
    let res = this.todoItems.sort(({ priority: a }, { priority: b }) => a - b);
    console.log(res);
    return res;
  }
}

let defaultList = new TodoList("list");
let defaultList2 = new TodoList("list 2");
let defaultList3 = new TodoList("list 3");
console.log(defaultList);
console.log(defaultList2);
console.log(defaultList3);
// defaultList.newTodo("Test item", "Lorem ipsum blah blah", "2004/12/17", 2);
// defaultList.newTodo("Eat cookies", "Yummy cookies, must eat!", "2025/04/20", 1);
// defaultList.newTodo("Kill enemies", "Die!", "2025/04/20", 3);

// let defaultListTwo = new TodoList("The second");
// defaultListTwo.newTodo("Drink water", "It's good for you!", "2025/04/25", 1);

// defaultList.sortTodos();
createMenu();
saveLists();

// *** UI *** //

// create the menu
function createMenu() {
  for (let list of TodoList.listArray) {
    let button = document.createElement("button");
    button.textContent = list.name;
    button.addEventListener("click", () => {
      currentList = TodoList.listArray.indexOf(list);
      console.log(currentList);
      drawList(list);
    });
    document.querySelector("#menu").appendChild(button);
  }
}
function drawList(list) {
  list.sortTodos();
  let mainDiv = document.querySelector("#list");
  mainDiv.textContent = "";

  for (let item of list.todoItems) {
    const index = list.todoItems.indexOf(item);

    let div = document.createElement("div");
    let header = document.createElement("h2");
    header.classList.add("itemName");
    header.textContent = item.name;
    div.appendChild(header);

    let desc = document.createElement("p");
    desc.classList.add("desc");
    desc.textContent = item.desc;
    div.appendChild(desc);

    let dueDate = document.createElement("time");
    dueDate.classList.add("dueDate");
    dueDate.textContent = item.dueDate;
    div.appendChild(dueDate);

    let priority = document.createElement("p");
    priority.classList.add("priority");
    priority.textContent = `Priority: ${item.priority}`;
    div.appendChild(priority);

    let isDoneButton = document.createElement("button");
    isDoneButton.classList.add("isDoneButton");
    isDoneButton.textContent = "complete!";
    div.appendChild(isDoneButton);
    isDoneButton.addEventListener("click", () => {
      item.toggleIsComplete();
      if (item.isComplete === true) {
        div.style.backgroundColor = "green";
      } else if (item.isComplete === false) {
        div.style.backgroundColor = "var(--primary)";
      }
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "delete";
    deleteButton.style.marginLeft = ".5rem";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "whitesmoke";
    div.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      list.todoItems.splice(index, 1);
      drawList(list);
    });

    div.style.padding = "1rem";
    div.style.marginBottom = "2rem";
    div.style.border = "2px solid var(--accentOne)";
    mainDiv.appendChild(div);
    saveLists();
  }
}

// create the form on button press
document.querySelector("#addNewTodo").addEventListener("click", (e) => {
  e.preventDefault();
  function createFormElements(name) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input;
    if (name == "description") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
    }

    label.htmlFor = name;
    label.textContent = name;
    input.id = name;
    input.name = name;
    div.appendChild(label);
    div.appendChild(input);
    div.id = name;
    return div;
  }

  let form = document.createElement("form");

  if (document.querySelector("form")) {
    // delete the form if the button is pressed again
    document.querySelector("form").remove();
    return;
  }

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        form.appendChild(createFormElements("name"));
        break;
      case 1:
        form.appendChild(createFormElements("description"));
        break;
      case 2:
        form.appendChild(createFormElements("dueDate"));
        form.querySelector("input#dueDate").type = "date";
        break;
      case 3:
        form.appendChild(createFormElements("priority"));
        form.querySelector("input#priority").type = "number";
        break;
    }
  }

  let submit = document.createElement("button");
  submit.textContent = "submit";
  submit.id = "submit";
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let name = form.name.value;
    let desc = form.description.value;
    let dueDate = form.dueDate.value;
    let priority = form.priority.value;
    TodoList.listArray[currentList].newTodo(name, desc, dueDate, priority);
    drawList(TodoList.listArray[currentList]);
  });
  form.appendChild(submit);

  document.querySelector("#formDiv").appendChild(form);
});

function saveLists() {
  const savedLists = TodoList.listArray;
  const jsonLists = JSON.stringify(savedLists);
  localStorage.setItem("lists", jsonLists);
  localStorage.setItem("currentListIndex", currentList); // Save index too
}
