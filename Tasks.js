import { Task } from "./Task.js";

export class Tasks{
    #tasks =[];
     Gettasks(){
        return this.#tasks;
    }
    AddTask(task){
        if(task instanceof Task===false){
            console.log('wrong')
            return;
        }
        this.#tasks.push(task);
    }
}