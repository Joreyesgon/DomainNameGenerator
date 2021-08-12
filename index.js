
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


//var domain1 = pronoun[(0)].concat(adj[(0)]).concat(noun[(0)]).concat(extension);
//var domain2 = pronoun[(0)].concat(adj[(0)]).concat(noun[(1)]).concat(extension);
//var domain3 = pronoun[(0)].concat(adj[(1)]).concat(noun[(0)]).concat(extension);
//var domain4 = pronoun[(0)].concat(adj[(1)]).concat(noun[(1)]).concat(extension);
//var domain5 = pronoun[(1)].concat(adj[(0)]).concat(noun[(0)]).concat(extension);
//var domain6 = pronoun[(1)].concat(adj[(0)]).concat(noun[(1)]).concat(extension);
//var domain7 = pronoun[(1)].concat(adj[(1)]).concat(noun[(0)]).concat(extension);
//var domain8 = pronoun[(1)].concat(adj[(1)]).concat(noun[(1)]).concat(extension);

//console.log(domain1);
//console.log(domain2);
//console.log(domain3);
//console.log(domain4);
//console.log(domain5);
//console.log(domain6);
//console.log(domain7);
//console.log(domain8);

//console.log(pronoun[(0)].concat(adj[(0)]).concat(noun[(0)]).concat(extension));
//console.log(pronoun[(0)].concat(adj[(0)]).concat(noun[(1)]).concat(extension));
//console.log(pronoun[(0)].concat(adj[(1)]).concat(noun[(0)]).concat(extension));
//console.log(pronoun[(0)].concat(adj[(1)]).concat(noun[(1)]).concat(extension));
//console.log(pronoun[(1)].concat(adj[(0)]).concat(noun[(0)]).concat(extension));
//console.log(pronoun[(1)].concat(adj[(0)]).concat(noun[(1)]).concat(extension));
//console.log(pronoun[(1)].concat(adj[(1)]).concat(noun[(0)]).concat(extension));
//console.log(pronoun[(1)].concat(adj[(1)]).concat(noun[(1)]).concat(extension));

//for(let i = 0; i < 10; i++){
//    console.log(i)  
//}
//console.log("Se termino el for")

//console.log(pronoun[0]+adj[0]+noun[0]+extension)//

//const str1 = "Hello";
//const str2 = "World";
//console.log(str1.concat(" ",str2));
//console.log(str2.concat(" ",str1));

