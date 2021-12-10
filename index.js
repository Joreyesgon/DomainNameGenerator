
let pronoun = ["the","our",];
let adj = ["great","big",];
let noun = ["jogger","racoon",];

for(p = 0; p < pronoun.length; p++){
    for(a = 0; a < adj.length; a++){
        for(n = 0; n < noun.length; n++){
            const element = pronoun[p]+adj[a]+noun[n];
            console.log("https://www." + element + ".com");
            console.log("https://www." + element + ".net");
            console.log(`https://www.${element}.cl`);
            console.log(`https://www.${element}.us`);
        }
    }
}


//es necesario pasar el indice primero
//for(var indice in pronoun){
//    console.log(indice)
//    console.log(pronoun[indice])
//}

//muestra el elemento como tal
//for(var elemento of pronoun){
//    console.log(elemento)
//}

//adj.sort();
//console.log( adj )

//for(var key in noun){
//    console.log( noun[key])
//}
