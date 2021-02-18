btn1.onclick = uno;
btn2.onclick = dos;
btn3.onclick = tres;
btn4.onclick = cuatro;
btn5.onclick = cinco;

var myName = ["N", "A", "T", "A", "L", "I", "A"];
var myName2 = ["N", "A", "T", "A", "L", "I", "A", "1"];
var MyNameString = myName.join("").toLowerCase();

// EJERCICIO 1
function uno() {
  for (i = 0; i <= myName.length - 1; i++) {
    console.log(myName[i]);
  }
}

// EJERCICIO 2
function dos() {
  for (var i = 0; i < myName2.length; i++) {
    if (myName2[i].match(/[aeiou]/gi)) {
      console.log(`${myName2[i]} es una vocal`);
    } else if (myName2[i].match(/[bcdfghjklmnpqrstvwxyz]/gi)) {
      console.log(`${myName2[i]} es una consonante`);
    } else if (myName2[i] !== isNaN) {
      console.log(`${myName2[i]} es un número`);
    }
  }
}

// EJERCICIO 3
/* function tres() {
  var MyNameString = myName.join("").toLowerCase();
  var counts = {};
  var myNameLetter, count;

  for (let i = 0; i < MyNameString.length; ++i) {
    myNameLetter = MyNameString.charAt(i);
    count = counts[myNameLetter];
    if (count) {
      counts[myNameLetter] = count + 1;
    } else {
      counts[myNameLetter] = 1;
    }
  }

  for (myNameLetter in counts) {
    console.log(myNameLetter + ":" + counts[myNameLetter]);
  }
} */

function tres() {
  let charMap = new Map();
  const count = 0;
  for (const key of MyNameString) {
    charMap.set(key, count);
  }
  for (const key of MyNameString) {
    let count = charMap.get(key);
    charMap.set(key, ++count);
  }
  for (const [key, value] of charMap) {
    console.log(key, value);
  }
}

// EJERCICIO 4
function cuatro() {
  var myName5 = ["N", "A", "T", "A", "L", "I", "A"];
  var mySurname5 = ["D", "Z", "I", "E", "C", "I", "O", "L"];
  myName5.push(" ");
  const fullName = [].concat(myName5, mySurname5);
  console.log(fullName);
}

// NIVEL 2
function cinco() {
  var str =
    "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
  var strcortada = str.split(" ");
  var miExpresion = /[a-zA-Z\u00f1\d\._-]+@[a-zA-Z\u00f1\d\._-]+\.[a-zA-Z]./gi;
  var expresionPaco = /([a-zñ\d.-]+)@([a-zñ\d.-]+).([a-z]{2,8})/gi;
  var emails = [];
  var emailsOk = [];

  function Email() {
    let myArray = str.match(miExpresion);
    let emails2 = [...new Set(myArray)];
    emails2.forEach((elem) => {
      console.log(elem);
    });
  }
  Email();

  /* 
  for (i = 0; i < strcortada.length; i++) {
    if (strcortada[i].match(expresionPaco)) {
      emails.push(strcortada[i]);
    }
  }
  for (i = 0; i < emails.length; i++) {
    if (emailsOk.indexOf(emails[i] !== -1)) {
      emailsOk.push(emails[i]);
    }
  }
  console.log(emailsOk); */
}
