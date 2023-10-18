import { Tasks } from "./Tasks.js";
import { Task } from "./Task.js";
import { TasksKey } from "./globals.js";


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const tasks = new Tasks();

function CreateTaskList(){
    const items = localStorage.getItem(TasksKey);
    const task_items = JSON.parse(items);
    
    task_items.forEach(element => {
        const checklist = document.createElement('input');
        const label = document.createElement('label');
        const br = document.createElement('br');
        label.textContent = element.title + ' ';
        checklist.type = 'checkbox';
        label.append(checklist);
        document.body.append(label);
        document.body.append(br);

        console.log(element);
    });
}

button.addEventListener('click',()=>{
    let task = new Task(input.value,textarea.value);
    tasks.AddTask(task);
    const taskArray = tasks.Gettasks();
    localStorage.setItem(TasksKey,JSON.stringify(taskArray));

    CreateTaskList();
    

    input.value ='';
    textarea.value ='';

})

CreateTaskList();