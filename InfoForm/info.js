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


const title = document.createElement('labe');
const label1 = document.createElement('label');
const br = document.createElement('br');
title.textContent=task.title;
label1.textContent = 'Title:\t';
label1.append(title);

const des = document.createElement('label');
const label2 = document.createElement('label');
const br1 = document.createElement('br');
des.textContent=task.description;
label2.textContent = 'Description:\t';
label2.append(des);

const date = document.createElement('label');
const label3 = document.createElement('label');
const br2 = document.createElement('br');
date.textContent=task.date;
label3.textContent = 'Date:\t';
label3.append(date);

const id = document.createElement('label');
const label4 = document.createElement('label');
const br3 = document.createElement('br');
id.textContent=task.id;
label4.textContent = 'ID:\t';
label4.append(id);


const a = document.createElement('a');
a.textContent='BACK TO MAIN';
a.href='../index.html';

document.body.append(label1);
document.body.append(br);
document.body.append(label2);
document.body.append(br1);
document.body.append(label3);
document.body.append(br2);
document.body.append(label4);
document.body.append(br3);
document.body.append(a);

