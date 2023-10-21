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
    NotSorted(){
        return this.#tasks.sort((a,b)=>{
            let dateParts1= a.date.match(/(\d+)/g);
            let dateParts2 = b.date.match(/(\d+)/g);

            let d1 = new Date(dateParts1[2], dateParts1[1] - 1, dateParts1[0], dateParts1[3], dateParts1[4], dateParts1[5]).getTime();
            let d2 = new Date(dateParts2[2], dateParts2[1] - 1, dateParts2[0], dateParts2[3], dateParts2[4], dateParts2[5]).getTime();
            

            if (d1 < d2)
            return -1;
            if (d1 > d2)
                return 1;
            return 0;
        });
    }

    SortByDate(){
        return this.#tasks.sort((a,b)=>{
            let dateParts1= a.date.match(/(\d+)/g);
            let dateParts2 = b.date.match(/(\d+)/g);

            let d1 = new Date(dateParts1[2], dateParts1[1] - 1, dateParts1[0], dateParts1[3], dateParts1[4], dateParts1[5]).getTime();
            let d2 = new Date(dateParts2[2], dateParts2[1] - 1, dateParts2[0], dateParts2[3], dateParts2[4], dateParts2[5]).getTime();
           

            if (d1 > d2)
            return -1;
            if (d1 < d2)
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

    FiltDone(){
        return this.#tasks.filter(t=>t.status===true);
    }
    FiltNotDone(){
        return this.#tasks.filter(t=>t.status===false);
    }
}