export const TasksKey = 'Tasks';

export function RegexTittle(str){
    var p1 = /^(.+\s){1,16}.+$/;
    var p2 = /^(?![\d\s]+$)(?!\s)[^ ]$/;

    if (p1.test(str) && p2.test(str)) {
        
        return 0;
    } 
    return 1;
}

export function RegexDes(str,title){
    let trimmedDes = str.trim();
    if(trimmedDes!==title && trimmedDes!==''){
        return 0;
    }
    return 1;
}