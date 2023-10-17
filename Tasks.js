import { Task } from "./Task.js";

export class Tasks{
    #tasks = new Array();
    get tasks(){
        return this.#tasks;
    }
    AddTask(task){
        if(task instanceof Task===false){
            return;
        }
        this.#tasks.push(task);
    }
}