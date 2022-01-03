function getdice1() {
    return Math.floor((Math.random() * 6)+1);
    }

function getdice2() {
        return Math.floor((Math.random() * 6)+1);
    }
   
function getRandomAddition(){
    var add;
    add = getdice1() + getdice2() ;
    return add;
    }      
    console.log(getRandomAddition());