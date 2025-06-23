// Per eseguire questo file, usa il comando:
// node 29/for_alternativi.js

const numeri = [45,77, 98];
numeri.forEach(numero => console.log(numero));

const persona = {
  nome: 'Gabriele',
  età: 30,
  città: 'Torino'
};

for (const chiave in persona) {
  console.log(`${chiave}: ${persona[chiave]}`);
}

for (const numero of numeri) {
  console.log(`Recupero numero con for ... of  ${numero}`);
}

for (const indice in numeri) {
  console.log(`Recupero indice con for ... in  ${indice}`);
}
