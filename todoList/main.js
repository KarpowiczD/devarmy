let todosWrapper, addForm, todoList, doneList;

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  todosWrapper = document.querySelector('.todos-wrapper');
  addForm = todosWrapper.querySelector('form');
  todoList = todosWrapper.querySelector('#todo-list .check-list')
  doneList = todosWrapper.querySelector('#done-list .check-list')
  addForm.addEventListener('submit', onSumbit);
}

function onSumbit(event) {
  event.preventDefault();
  let addInput = addForm.querySelector('input:first-of-type');
  let todoText = addInput.value;
  addNewTodo(todoText);
}

function addNewTodo(text) {
  let todoElementNode = document.createElement('li');
  let labelNode = document.createElement('label');
  let inputNode = document.createElement('input');
  let textNode = document.createTextNode(text);
  let todosList = todosWrapper.querySelector('#todo-list .check-list');
  inputNode.type = "checkbox";

  labelNode.appendChild(inputNode);
  labelNode.appendChild(textNode);
  todoElementNode.appendChild(labelNode);
  todosList.appendChild(todoElementNode);

  inputNode.addEventListener('change', onCheckChange);
  addForm.reset();
}

function onCheckChange(event) {
  let currentCheckbox = event.target;
  const isChecked = currentCheckbox.checked;
  let currentListElement = currentCheckbox.parentNode.parentNode;

  if(isChecked) {
    doneList.appendChild(currentListElement);
  } else {
    todoList.appendChild(currentListElement);
  }
}