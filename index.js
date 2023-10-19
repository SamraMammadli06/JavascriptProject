import { Tasks } from "./Tasks.js";
import { Task } from "./Task.js";
import { TasksKey } from "./globals.js";


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('form button');
const tasks = new Tasks();


function CreateTaskList(){
    const taskArray = tasks.Gettasks();
    const checklist = document.createElement('input');
    const label = document.createElement('label');
    const br = document.createElement('br');
    label.textContent = taskArray[taskArray.length - 1].title + ' ';
    checklist.type = 'checkbox';
    label.append(checklist);
    document.body.append(label);
    document.body.append(br);
}


function UploadLocalStorage(){
    const items = localStorage.getItem(TasksKey);
    if(items===null){
        return;
    }
    const task_items = JSON.parse(items);
    task_items.forEach(e=>{
        const task = new Task();
        task.fromJson(e);
        tasks.AddTask(task);
        console.log(tasks);
    })
    task_items.forEach(element => {
        const checklist = document.createElement('input');
        const label = document.createElement('label');
        const br = document.createElement('br');
        label.textContent = element.title + ' ';
        checklist.type = 'checkbox';
        label.append(checklist);
        document.body.append(label);
        document.body.append(br);

    });
    console.log('Hii')
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

UploadLocalStorage();