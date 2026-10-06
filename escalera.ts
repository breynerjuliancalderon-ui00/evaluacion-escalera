let valorOriginal: number = 4512893;

let aux: number = valorOriginal;
let ultimoVisto: number = -1;
let rachaActual: number = 0;
let subSecuencia: number = 0;
let factorPosicion: number = 1;

let maxRacha: number = 0;
let secuenciaOptima: number = 0;

while (aux !== 0) {
  const residuo: number = aux % 10;
  aux = Math.floor(aux / 10);

  if (ultimoVisto - 1 === residuo) {
    rachaActual++;
    factorPosicion *= 10;
    subSecuencia += residuo * factorPosicion;
  } else {
    rachaActual = 1;
    factorPosicion = 1;
    subSecuencia = residuo;
  }

  ultimoVisto = residuo;

  if (rachaActual >= maxRacha) {
    maxRacha = rachaActual;
    secuenciaOptima = subSecuencia;
  }
}

console.log(`Longitud: ${maxRacha}`);
console.log(`Escalera: ${secuenciaOptima}`);