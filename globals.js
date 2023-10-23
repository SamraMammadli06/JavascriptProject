export const TasksKey = 'Tasks';

export function RegexTittle(str){
    var p1 = /^(.+\s){1,16}.+$/;
    var p2 = /^(?![\d\s]+$)(?!\s)(?:(?! {2,}).)+[^ ]$/;

    if (p1.test(str) && p2.test(str)) {
        
        return 0;
    } 
    return 1;
}

export function RegexDes(str){
    var p1 = /^(.+\s){1,16}.+$/;
    if (p1.test(str)) {
        
        return 0;
    } 
    return 1;
}