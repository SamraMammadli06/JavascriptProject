const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export class Task{
    #id;
    #title;
    #description;
    #date;
    #status;
    constructor (title,description) {
        if(title==='' || description===''){
            throw new Error("Can't be empty!");
        }
        if(RegexTittle(title)===1 || RegexDes(description)===1){
            throw new Error('Wrong Format');
        }
        this.#id = uid();
        this.#title = title;
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
        return this.#title;
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

    set status(status){
        this.#status=status;
    }
    set title(title){
        if(title===''){
            throw new Error("Can't be empty!");
        }
        this.#title = title;
    }
    set description(description){
        if(description===''){
            throw new Error("Can't be empty!");
        }
        this.#description = description;
    }
    toJSON() {
        return {id: this.#id ,title: this.#title, description: this.#description, date: this.#date, status :this.#status };
    }
    fromJson(json){
        this.#id = json.id;
        this.#date = json.date;
        this.#description = json.description;
        this.#title = json.title;
        this.#status = json.status;
    }
}

function RegexTittle(str){
    var p1 = /^(.+\s){1,16}.+$/;
    var p2 = /^(?![\d\s]+$)(?!\s)(?:(?! {2,}).)+[^ ]$/;

    if (p1.test(str) && p2.test(str)) {
        
        return 0;
    } 
    return 1;
}

function RegexDes(str){
    var p1 = /^(.+\s){1,16}.+$/;
    if (p1.test(str)) {
        
        return 0;
    } 
    return 1;
}