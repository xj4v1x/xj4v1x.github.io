window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#FCB03C'
  });

  function progress() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 1);  // Start of this year
    var end = new Date(now.getFullYear() + 1, 0, 1);  // End of this year
    var done = (now-start) / (end-start);
    var percentStr = (100.0 * done.toFixed(4)).toString();
    var dpasados = Math.round((now-start)/86400000);
    var dfaltan = 366 - dpasados;    
    var corte = 50;
    if (done < 0.1) {
      percentStr = percentStr.slice(0, 4);
    } else {
      percentStr = percentStr.slice(0, 5);
    }
    document.getElementById("percent").innerHTML = percentStr + "%";
    document.getElementById("pasados").innerHTML = "Han pasado " + dpasados + " días del año " + now.getFullYear();
    document.getElementById("quedan").innerHTML = "Faltan " + dfaltan + " días para el año " + (now.getFullYear()+1);
    
    diaspasados = ""
    console.log(dpasados);
    for (var i = 0; i <= dpasados; i++) {    
      if (i%corte == 0){ (diaspasados = diaspasados + " ")}
      diaspasados = diaspasados + "⣿"
      console.log(i);
      console.log(i%50);      
    }
    for (var i = dpasados; i <= 365; i++) {    
      if ((i+1)%corte == 0){ (diaspasados = diaspasados + " ")}
      diaspasados = diaspasados + "⣀"
    }
    document.getElementById("diaspasados_x").innerHTML = diaspasados;
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0
  
  requestAnimationFrame(update);

  function update() {
    
    line.set(progress());
    requestAnimationFrame(update);
  }
};
