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
    SortByDate(){
        return this.#tasks.sort((a,b)=>{
            if (a.date > b.date)
            return -1;
            if (a.date < b.date)
                return 1;
            return 0;
        });
    }
    SortByTitle(){
        return this.#tasks.sort((a,b)=>{
            if (a.title < b.title)
            return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        });
    }
}