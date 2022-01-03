function getrandom1() {
    return Math.floor(Math.random() * 100);
    }

function getrandom2() {
        return Math.floor(Math.random() * 100);
    }

function getrandom3() {
        return Math.floor(Math.random() * 100);
    }

function getrandom4() {
        return Math.floor(Math.random() * 100);
    }

function getrandom5() {
        return Math.floor(Math.random() * 100);
    }

function getRandomAddition(){
    var add;
    add = getrandom1() + getrandom2() + getrandom3() + getrandom4() + getrandom5() ;
    return add;
    }      
    console.log(getRandomAddition());

function getRandomAverage(){
        var avg;
        var n=5;
        avg = (getRandomAddition())/n ;
        return avg;
        }      
        console.log(getRandomAverage());
 