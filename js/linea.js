const d = document;
let linea = d.getElementById('linea');
window.addEventListener('offline', event => {
    console.log("estoy sin conexion!!");
    linea.innerHTML = ('<i class="fas fa-exclamation-triangle"></i> Offline');
});

window.addEventListener('online', event => {
    console.log("estoy con conexion!!");
  
    linea.innerHTML = ('<i class="fas fa-signal"></i> Online');
});

if (navigator.onLine) {
    linea.innerHTML = ('<i class="fas fa-signal"></i> Online');
    
   
  }else{
   
    linea.innerHTML = ('<i class="fas fa-exclamation-triangle"></i> Offline'); 
  }