import { Tasks } from "./Tasks.js";
import { Task } from "./Task.js";
import { TasksKey } from "./globals.js";


const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('form button');
const sortRadio = document.querySelectorAll('div[class=sort] input[type=radio]');
const filtrRadio = document.querySelectorAll('div[class=filtr] input[type=radio]');
let labels = document.querySelectorAll('label[class=Taskbox]');
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let tasks = new Tasks();


function CreateTaskList(new_task){
    const taskArray = tasks.Gettasks();
    const checklist = document.createElement('input');
    const label = document.createElement('a');
    const button = document.createElement('button');
    button.textContent='DELETE';
    button.className='deleteButton';
    const a = document.createElement('a');
    a.textContent='Edit';
    a.className='edit';
    a.href ="/EditForm/edit.html?id="+new_task.id;
    const br = document.createElement('br');
    label.textContent = taskArray[taskArray.length - 1].title + ' ';
    checklist.type = 'checkbox';
    label.className = 'Taskbox';
    label.href = '/InfoForm/info.html?id='+new_task.id;
    br.className='Taskbox';
    label.append(checklist);
    document.body.append(label);
    document.body.append(a);
    document.body.append(button);
    document.body.append(br);
    button.addEventListener('click',e=>{
        label.remove();
        button.remove();
        br.remove();
        a.remove();
        const taskIndex = tasks.Gettasks().findIndex(task=>task===new_task);
        tasks.Gettasks().splice(taskIndex,1);
        localStorage.setItem(TasksKey,JSON.stringify(tasks.Gettasks()));
    })
    checklist.addEventListener('change',e=>{
        if(new_task.checked===true){
            element.status = true;
        }
        else{
            new_task.status=false;
        }
        localStorage.setItem(TasksKey,JSON.stringify(tasks.Gettasks()));
    })
    
}

function CreateChecklists(tasks_items){
    tasks_items.forEach(element => {
        const checklist = document.createElement('input');
        const label = document.createElement('a');
        const button = document.createElement('button');
        button.textContent='DELETE';
        button.className='deleteButton';
        const a = document.createElement('a');
        a.textContent='Edit';
        a.className='edit';
        a.href ="/EditForm/edit.html?id="+element.id;
        const br = document.createElement('br');
        label.textContent = element.title + ' ';
        checklist.type = 'checkbox';
        label.href = '/InfoForm/info.html?id='+element.id;
        br.className='Taskbox';
        label.className = 'Taskbox';
        label.append(checklist);
        document.body.append(label);
        document.body.append(a);
        document.body.append(button);
        document.body.append(br);  
        if(element.status===true){
            checklist.checked=true;
        }
        button.addEventListener('click',e=>{
            label.remove();
            button.remove();
            a.remove();
            br.remove();
            const taskIndex = tasks.Gettasks().findIndex(task=>task===element);
            tasks.Gettasks().splice(taskIndex,1);
            localStorage.setItem(TasksKey,JSON.stringify(tasks.Gettasks()));
        })
        checklist.addEventListener('change',e=>{
            if(checklist.checked===true){
                element.status = true;
            }
            else{
                tasks.status=false;
            }
            localStorage.setItem(TasksKey,JSON.stringify(tasks.Gettasks()));
        })
    });
}

function UploadLocalStorage(){
    const items = localStorage.getItem(TasksKey);
    if(items===null){
        return;
    }
    const task_items = JSON.parse(items);
    task_items.forEach(e=>{
        const task = new Task(e.title,e.description);
        task.fromJson(e);
        tasks.AddTask(task);
    })
    tasks.Gettasks().forEach(element => {
        const checklist = document.createElement('input');
        const label = document.createElement('a');
        const button = document.createElement('button');
        button.textContent='DELETE';
        button.className='deleteButton';
        const a = document.createElement('a');
        a.textContent='Edit';
        a.className='edit';
        a.href ="/EditForm/edit.html?id="+element.id;
        const br = document.createElement('br');
        label.textContent = element.title + ' ';
        label.href = '/InfoForm/info.html?id='+element.id;
        checklist.type = 'checkbox';
        br.className='Taskbox';
        if(element.status===true){
            checklist.checked=true;
        }
        label.className = 'Taskbox';
        label.append(checklist);
        document.body.append(label);
        document.body.append(a);
        document.body.append(button);
        document.body.append(br);
        button.addEventListener('click',e=>{
            label.remove();
            button.remove();
            a.remove();
            br.remove();
            const taskIndex = tasks.Gettasks().findIndex(task=>task===element);
            tasks.Gettasks().splice(taskIndex,1);
            localStorage.setItem(TasksKey,JSON.stringify(tasks.Gettasks()));
        })
        checklist.addEventListener('change',e=>{
            if(checklist.checked===true){
                element.status = true;
            }
            else{
                tasks.status=false;
            }
            localStorage.setItem(TasksKey,JSON.stringify(tasks.Gettasks()));
        })
    });
}


button.addEventListener('click',()=>{
    let task = new Task(input.value,textarea.value);
    tasks.AddTask(task);
    const taskArray = tasks.Gettasks();
    localStorage.setItem(TasksKey,JSON.stringify(taskArray));

    CreateTaskList(task);
    

    input.value ='';
    textarea.value ='';

})

const sortRadioArr = [...sortRadio];
sortRadioArr.forEach(e=>{
    e.addEventListener('click',element=>{
        const getCheckboxes = document.getElementsByClassName('Taskbox');
        const getButtons = document.getElementsByClassName('deleteButton');
        const getEditButtons = document.getElementsByClassName('edit');

        [...getCheckboxes].forEach(el=>{
            el.remove();
        });
        
        [...getButtons].forEach(el=>{
            el.remove();
        });
        
        [...getEditButtons].forEach(el=>{
            el.remove();
        });
        if(sortRadioArr[0]===e){
           const t = tasks.SortByDate();
           CreateChecklists(t);
           tasks.SetTasks(t);
        }
        else if(sortRadioArr[1]===e){
            const t =tasks.SortByTitle();
            CreateChecklists(t);
            tasks.SetTasks(t);
        }
        else{
            const t =tasks.NotSorted();
            CreateChecklists(t);
            tasks.SetTasks(t);
        }
    })
})

const filtrRadioArr = [...filtrRadio];
filtrRadioArr.forEach(e=>{
    e.addEventListener('click',element=>{
        const getCheckboxes = document.getElementsByClassName('Taskbox');
        const getButtons = document.getElementsByClassName('deleteButton');
        const getEditButtons = document.getElementsByClassName('edit');
        [...getCheckboxes].forEach(el=>{
            el.remove();
        });
        [...getButtons].forEach(el=>{
            el.remove();
        });
        [...getEditButtons].forEach(el=>{
            el.remove();
        });
        if(filtrRadioArr[1]===e){
           const t = tasks.FiltDone();
           CreateChecklists(t);
        }
        else if(filtrRadioArr[2]===e){
            const t =tasks.FiltNotDone();
            CreateChecklists(t);
        }
        else{
            const t = tasks.NotSorted();
            CreateChecklists(t);
        }
    })
})

UploadLocalStorage();
