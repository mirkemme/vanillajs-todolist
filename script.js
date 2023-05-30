import { todoList, getTodoList, createEl, deleteTodo, qS, createInputModal, listItemRender, addListeners } from "./utils/fn.js";

export const bodyEl = qS("body");
export const rootEl = qS("#root");

export const todoListWrapper = createEl("div", "", { name: "class", value: "todoListWrapper" });
const buttonsContainer = createEl("div", "", { name: "class", value: "buttonsContainer" });
const addBtn = createEl("button", "", { name: "class", value: "addBtn" });
const addBtnIcon = createEl("img", "", { name: "src", value: "./assets/plus.svg" }, { name: "alt", value: "add" });
const deleteBtn = createEl("button", "", { name: "class", value: "deleteBtn" });
const deleteBtnIcon = createEl("img", "", { name: "src", value: "./assets/trash.svg" }, { name: "alt", value: "delete" });

addBtn.append(addBtnIcon);
deleteBtn.append(deleteBtnIcon);
buttonsContainer.append(addBtn, deleteBtn);

rootEl.append(buttonsContainer);
export const deleteBtnEl = qS(".deleteBtn");

/* Se la todoList è vuota (todoList.length == 0) allora chiamo getTodoList() per popolare la mia todo list con una chiamata
GET API su dummyjson. Altrimenti, avendo usato local storage, la todo list sarà già popolata e quindi procedo a renderizzare
la lista e ad aggiungere i listeners sulle cards */
if (todoList.length) {
    listItemRender();
    addListeners();
} else {
    getTodoList();
}

addBtn.addEventListener("click", () => createInputModal());
deleteBtn.addEventListener("click", () => deleteTodo());