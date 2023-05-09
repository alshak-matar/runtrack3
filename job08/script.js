function sommenombrespremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
      return nombre1 + nombre2;
    } else {
      return false;
    }
  }
  
  function estNombrePremier(nombre) {
    if (nombre <= 1) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    
    return true;
  }

  console.log(sommenombrespremiers(3, 5));
  console.log(sommenombrespremiers(7, 11));
  console.log(sommenombrespremiers(4, 6));
  console.log(sommenombrespremiers(9, 13));
  
