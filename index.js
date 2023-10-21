import { Tasks } from "./Tasks.js";
import { Task } from "./Task.js";
import { TasksKey } from "./globals.js";


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('form button');
const sortRadio = document.querySelectorAll('div[class=sort] input[type=radio]')
const tasks = new Tasks();


function CreateTaskList(){
    const taskArray = tasks.Gettasks();
    const checklist = document.createElement('input');
    const label = document.createElement('label');
    const br = document.createElement('br');
    label.textContent = taskArray[taskArray.length - 1].title + ' ';
    checklist.type = 'checkbox';
    label.className = 'Taskbox';
    br.className='Taskbox';
    label.append(checklist);
    document.body.append(label);
    document.body.append(br);
}
function CreateChecklists(tasks_items){
    tasks_items.forEach(element => {
        const checklist = document.createElement('input');
        const label = document.createElement('label');
        const br = document.createElement('br');
        label.textContent = element.title + ' ';
        checklist.type = 'checkbox';
        br.className='Taskbox';
        label.className = 'Taskbox';
        label.append(checklist);
        document.body.append(label);
        document.body.append(br);

    });
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
    })
    task_items.forEach(element => {
        const checklist = document.createElement('input');
        const label = document.createElement('label');
        const br = document.createElement('br');
        label.textContent = element.title + ' ';
        checklist.type = 'checkbox';
        br.className='Taskbox';
        label.className = 'Taskbox';
        label.append(checklist);
        document.body.append(label);
        document.body.append(br);

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
const sortRadioArr = [...sortRadio];
sortRadioArr.forEach(e=>{
    e.addEventListener('click',element=>{
        const getCheckboxes = document.getElementsByClassName('Taskbox');
        [...getCheckboxes].forEach(el=>{
            el.remove();
        })
        if(sortRadioArr[0]===e){
           const t = tasks.SortByDate();
            CreateChecklists(t);
        }
        else if(sortRadioArr[1]===e){
            const t =tasks.SortByTitle();
            CreateChecklists(t);
        }
        else{
            const items = localStorage.getItem(TasksKey);
            if(items===null){
                return;
            }
            const task_items = JSON.parse(items);
            CreateChecklists(task_items)
        }
    })
})

UploadLocalStorage();