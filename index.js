
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
//function wrapAdjective(){
    
//}
function wrapAdjective(symbol = "*") {
   // let result = wrapAdjective('*')
   // let emphatic = result("a hard worker")
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}
