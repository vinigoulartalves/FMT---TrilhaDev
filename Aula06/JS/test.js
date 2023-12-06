let x = 10;

let result = '';



if (x > 5) {

  result = 'Maior que 5';

} else if (x > 2) {

  result = 'Maior que 2';

} else {

  result = 'Menor ou igual a 2';

}



switch (x) {

  case 5:

    result += ' e igual a 5';

    break;

  case 10:

    result += ' e igual a 10';

    break;

  default:

    result += ' e diferente de 5 e 10';

}

console.log (result)