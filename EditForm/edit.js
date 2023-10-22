import {TasksKey} from '../globals.js'

const url = new URL(location);
const urlSearchParams = new URLSearchParams(url.search);

console.log([...urlSearchParams][0]);

const [key, value] = [...urlSearchParams][0];

const tasks = JSON.parse(localStorage.getItem(TasksKey));


const task = tasks.find(task => task[key] === value);
if(task===undefined){
    throw new Error("Can't find task with this id");
}

console.log(task);

const title = document.createElement('input');
const label1 = document.createElement('label');
title.type='text';
title.value=task.title;
label1.textContent = 'Title';
label1.append(title);

const des = document.createElement('input');
const label2 = document.createElement('label');
des.type='text';
des.value=task.description;
label2.textContent = 'Description';
label2.append(des);


const a = document.createElement('a');
a.textContent='SAVE';
a.href='../index.html';
a.addEventListener('click',e=>{
    task.title= title.value;
    task.description = des.value;
    [...tasks].forEach(element => {
        if(element.id === task.id){
            element = task;
        }
    });
    localStorage.setItem(TasksKey,JSON.stringify(tasks));

    title='';
    des='';
})
document.body.append(label1);
document.body.append(label2);
document.body.append(a);

