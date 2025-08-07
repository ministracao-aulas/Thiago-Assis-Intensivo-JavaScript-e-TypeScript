/*
false
0
''
null
undefined
NaN
*/

// conversão de valores para numéricos (se possível)

val = '12';
// val = '3a1bc';

// val = val.replace(/\D/g, '');

// val = parseInt(val); // cast não ideal para a maioria dos casos
// val = parseFloat(val); // cast não ideal para a maioria dos casos

// val = val - 0; // cast
// val = Number(val); // cast

// val = isNaN(val) ? 0 : val;
// val = val ? val : 0;

// Tudo em 1 linha
val = isNaN(Number(val)) ? 0 : Number(val); // cast

console.log([typeof val, val]);
