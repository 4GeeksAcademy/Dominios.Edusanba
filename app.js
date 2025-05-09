// Definicion arrays.

let pronoun = ['the', 'our'];
let adj = ['greater', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.es'];

// Funcion generadora combinaciones

function generateDomainNames(pronouns, adjectives, nouns, extensions) {
    let domainNames = [];
    for (let p of pronouns) {
        for (let a of adjectives) {
            for (let n of nouns) {
                for (let ext of extensions) {
                    domainNames.push(`${p}${a}${n}${ext}`);
                }
            }
        }
    }
    return domainNames;
}

// Generar y mostrar

let domains = generateDomainNames(pronoun, adj, noun, extensions);
console.log('Dominios:', domains);