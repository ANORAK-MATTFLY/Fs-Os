const fs = require("fs");



// READ
const fileReader = fs.readFileSync('Ben.txt', 'utf8');
console.log('fileReader: ', fileReader);

// WRITE
fs.writeFileSync('user.json', `{nom:"Ben", prenom:"matanda", motDePasse:"1234"}`);

// DELETE : MET EN PARAMETRE LE NOM D'UNFICHIER DEJA EXISTANT
fs.unlinkSync('hello.txt');




// RENOMER UN FICHIER
// LE PREMIER PARAM DOIT ETRE LE NOM D'UN FICHIER EXISTSANT ET LE DEUXIEM UN NOM AU CHOIX
fs.renameSync('texte.txt', 'Ben.txt');




fs.mkdir('Folder', (error, data) => {
    fs.readFile('texte.txt', 'utf8', (error, data) => {
        fs.writeFile("Folder/filel.txt", "Je suis malade mais c'est pas corona", err => {
            if (err) console.log(err);
        });
    });
});

fs.readFile('texte.txt', 'utf8', (error, data) => {
    console.log(data);
});
console.log(fs);




// UNE FONCTION QUI PERMET DE CREE UN FICHIER
function fileWriter(fileName, content) {
    return fs.writeFileSync(fileName, content);
};
fileWriter('file.json', `{nom:Ben, post: Dev}`);