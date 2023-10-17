import { Tasks } from "./Tasks.js";
import { Task } from "./Task.js";


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const tasks = new Tasks();


button.addEventListener('click',()=>{
    let task = new Task(input.value,textarea.value);
    tasks.AddTask(task);
    console.log(tasks.tasks);
})
