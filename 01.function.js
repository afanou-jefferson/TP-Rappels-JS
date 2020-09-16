

///// EXO 2

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2){
    return nb1 + nb2;
}

resultat1 = additionner(nombre1,nombre2);

console.log("resultat1 = " + resultat1);

///// EXO 3

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 = " + resultat2);

var multiplication = function(nb1, nb2) {return nb1 * nb2};
resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 = " + resultat3);

/// EXO 4

var afficherOperation= function (nomOperation, operation, nb1, nb2){
    let myString = `${nomOperation}(${nb1}, ${nb2}) = ${operation(nb1,nb2)}`;
    return myString;
}

var exempleAffichageSomme = afficherOperation("Somme", additionner, 20, 40);
console.log("Affichage Operation : " +  exempleAffichageSomme);

var exempleAffichageProduit = afficherOperation("Multiplication", multiplication, nombre1, nombre2);
console.log("Affichage Operation : " +  exempleAffichageProduit);

var exempleAffichageSoustraction = afficherOperation("Soustraction", (nb1,nb2) => nb1-nb2 , 15, 5 );
console.log("Affichage Operation : " +  exempleAffichageSoustraction);
