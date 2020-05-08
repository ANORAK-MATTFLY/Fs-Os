let { totalmem, hostname } = require('os');
console.log('totalmem: ', (totalmem / 1073741824).toFixed(2) + 'GB');
console.log("nom d'utilisateur :", hostname);