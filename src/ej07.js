import currencyMap from 'currency-map-country';

let codigoPais, monedaDelPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    
    if(currencyMap[codigoPais] && currencyMap[codigoPais].currency){
        return currencyMap[codigoPais].currency;
    }
    return null; 
}