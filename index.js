// function multiplieByTwo(bruno) {
    
    
    
    
//     return bruno * 2 
// }

// let integer = 10;

// integer = multiplieByTwo (integer);

// console.log(integer);


//explication pour cette fonction du dessus
//il prend integer vaux la valeur 10  ==>> let integer = 10;integer = multiplieByTwo (integer);
//je lui passe 10  à ma fonction en paramétre  ====>>>> function multiplieByTwo(bruno) {
//il fait 10 x 2 puis il retourne cette valeur ====>>>   return bruno * 2  


//en faite integer = 10;
//il appel multiplieByTwo sur integer puis x 2 il fais 20 ;
//et on affiche 20 en log;



//1er façon de gérer les erreur qui n'est pas trop précise sur les explications de l'erreur

// function multiplieByTree(rigal) {
//     if (typeof rigal === "number") {
//        return rigal * 3 
//     }
// return null

//  }
//  let interger = '10';
// interger = multiplieByTree (interger)
// console.log(interger);


// if (interger === null) {
//     console.log("error");
// }else{
//     console.log(interger);
// }


// 2iem façon

function multiplieByFor(vidal) {
    if(typeof vidal !== 'number') {
        throw Error('value is not a number');
}

return vidal * 2;

}

function divideByTen(vidal) {
    
    if(typeof vidal !== 'number') {
        throw Error('value is still not a number')
}
return vidal / 10;
}

// let entier = '10';
//entier = multiplieByFor(entier);
//console.log(entier);




try {
  entier = multiplieByFor (1);   

  entier = divideByTen ('toto');
} catch (error) {
    console.log('Err:' , error);
}

console.log(entier);


