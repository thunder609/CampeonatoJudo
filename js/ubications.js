function enviarUbicacion() {
    // Obtiene la latitud y la longitud del usuario.
 let latitud =    8.312054192054866;
  let longitud =   -62.698648753073726;
 
  
    // Crea una URL de Google Maps con la latitud y la longitud.
    let url = "https://www.google.com/maps/dir/?api=1&destination=" + latitud + "," + longitud;
  
    // Abre la URL de Google Maps en una nueva ventana.
    window.open(url, "_blank");
  }function enviarUbicacionClub() {
    // Obtiene la latitud y la longitud del usuario.
    let latitud =    7.754014822285667;
    let longitud =  -72.23068973590428;
   
  
    // Crea una URL de Google Maps con la latitud y la longitud.
    let url = "https://www.google.com/maps/dir/?api=1&destination=" + latitud + "," + longitud;
  
    // Abre la URL de Google Maps en una nueva ventana.
    window.open(url, "_blank");
  }