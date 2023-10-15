export class Task{
    #id;
    #tittle;
    #description;
    #date;
    #status;
    constructor (tittle,description) {
        if(tittle==='' || description===''){
            return;
        }
        this.#id = Math.random().toString(16).slice(2);
        this.#tittle = tittle;
        this.#description = description;
        this.#status = false;
        let currentdate = new Date();
        this.#date = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() +' '
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        
    }
    get id(){
        return this.#id;
    }
    get title(){
        return this.#tittle;
    }
    get description(){
        return this.#description;
    }
    get date(){
        return this.#date;
    }
    get status(){
        return this.#status;
    }

    set title(tittle){
        this.#tittle = tittle;
    }
    set description(description){
        this.#description = description;
    }
}
