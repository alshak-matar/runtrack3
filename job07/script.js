function jourtravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1;
    var jour = date.getDate();
    
    var joursFeries2020 = [
      "2020-01-01",
      "2020-04-10",
      "2020-05-01",
      "2020-05-08",
      "2020-05-21",
      "2020-06-01",
      "2020-07-14",
      "2020-08-15",
      "2020-11-01",
      "2020-11-11",
      "2020-12-25"
    ];
    
    var jourSemaine = date.getDay();
    
    var dateStr = jour + " " + mois + " " + annee;
    
    var isJourFerie = joursFeries2020.includes(date.toISOString().split("T")[0]);
    
    if (isJourFerie) {
      console.log("Le " + dateStr + " est un jour férié.");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
      console.log("Non, le " + dateStr + " est un week-end.");
    } else {
      console.log("Oui, le " + dateStr + " est un jour travaillé.");
    }
  }
  
  jourtravaille(new Date(2020, 0, 1));
  jourtravaille(new Date(2020, 11, 25));
  jourtravaille(new Date(2020, 3, 12));
  jourtravaille(new Date(2020, 5, 20));
  jourtravaille(new Date(2020, 8, 5));
  jourtravaille(new Date(2020, 11, 26));
  jourtravaille(new Date(2020, 6, 18));
