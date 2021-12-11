
let pronoun = ["the","our","my","you"];
let adj = ["great","big","small","dizzy" ];
let noun = ["turtle","racoon","cat","rabbit"];

for(p = 0; p < pronoun.length; p++){
    for(a = 0; a < adj.length; a++){
        for(n = 0; n < noun.length; n++){
            const element = pronoun[p]+adj[a]+noun[n];
            console.log("https://www." + element + ".com");
            console.log(`https://www.${element}.cl`);
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
