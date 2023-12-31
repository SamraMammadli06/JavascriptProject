import {TasksKey, RegexDes, RegexTittle} from '../globals.js'

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


const button = document.createElement('button');
const a = document.createElement('a');
a.textContent='Return';
a.href='../index.html';
button.textContent='SAVE\t';
button.addEventListener('click',e=>{
    if(title.value==='' || des.value===''){
        title.value=task.title;
        des.value=task.description;
        throw new Error("Can't be empty!");
    }
    if(RegexTittle(title.value)===1 || RegexDes(des.value,title.value)===1){
        title.value=task.title;
        des.value=task.description;
        throw new Error('Wrong Format');
    }
    task.title= title.value;
    task.description = des.value;
    [...tasks].forEach(element => {
        if(element.id === task.id){
            element = task;
        }
    });
    localStorage.setItem(TasksKey,JSON.stringify(tasks));

})
document.body.append(label1);
document.body.append(label2);
document.body.append(button);
document.body.append(a);


