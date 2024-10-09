// Selecting DOM elements
const bayoDiv = document.getElementById('container');
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    console.log(typeof taskText);
    alert('Please enter a task.');
    return;
  } else if (typeof taskText !== 'string') {
    console.log(taskText);
    alert('Numbers not allowed, Please enter a string.');
    return;
  }

  // Create a new list item
  console.log(bayoDiv, 'BAYOOOOOO');
  const heading = document.createElement('h1');
  heading.textContent = 'Hello Bayo!!!';
  bayoDiv.appendChild(heading);
  document.body.appendChild(heading);
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create a remove button for each task
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = () => li.remove();

  // Append the button to the task item
  li.appendChild(removeBtn);

  // Add the new task to the task list
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';
}

// Adding event listener to the button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
