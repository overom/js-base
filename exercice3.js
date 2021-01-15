const tab = [ 1, 5.2, 4, 0, -1]


const calcul = (tab) => {
    
    const total = (accumulator, currentValue) => accumulator + currentValue

    console.log('------------------------------------');
    console.log(tab.reduce(total));
    console.log('------------------------------------');
return calcul 
}
calcul (tab)






//var total = [0, 1, 2, 3].reduce((a, b)=> a + b,0);

//const reducer = (accumulator, currentValue) => accumulator + currentValue;

//console.log(tab.reduce(reducer));