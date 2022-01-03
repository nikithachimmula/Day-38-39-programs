let displaycolors = (message, ...colors) => {
    console.log(message);
    
    for (let i in colors){
        console.log(colors[i])
           }
    }
    let message = " List of colors"
    let anotherArray = ["hi", "bye"]
    let colorArray = ["orange", "yellow", "indigo"]
    displayColors(message, ...colorArray,...anotherArray)