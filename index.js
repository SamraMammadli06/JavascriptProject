import { Tasks } from "./Tasks.js";
import { Task } from "./Task.js";
import { TasksKey } from "./globals.js";


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const tasks = new Tasks();


button.addEventListener('click',()=>{
    let task = new Task(input.value,textarea.value);
    tasks.AddTask(task);
    const taskArray = tasks.Gettasks();
    localStorage.setItem(TasksKey,JSON.stringify(taskArray));
    input.value ='';
    textarea.value ='';
})
