
const TEST = "Une constante";

function testVar(){
    var test = 0;
    
    if(true){
        var test = 1;
        console.log(test);
    }
    console.log(test);
}

function testLet(){
    var test = 0;
    
    if(true){
        var test = 1;
        console.log(test);
    }
    console.log(test);
}


testVar();
testLet();