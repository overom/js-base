const solution = (str) => {

const tableau = str.split('')
const verlen = tableau.reverse()
const jointure = verlen.join('')

    console.log('------------------------------------');
    console.log(jointure);
    console.log('------------------------------------');
    return jointure
}
solution("victory")