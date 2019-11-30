class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);// Hacemos permante el 'this' a la intancia del objeto 'AutoPause'
    // Lo anterior se hace debido a que al llamar la función 'handleIntersection' adentro del objeto 'IntersectionObserver'
    // el 'this' se refiere al 'IntersectionObserver' y no al 'AutoPause'. Por esa razón se hace permanente el 'this'
  }

  run(player) { // Metodo para ejecutar el plugin AutoPause
    this.player = player;

    // Se crea el 'IntersectionObserver', el cual recibe un handler como primer parametro
    // y el segundo parametro es un objeto de configuración llamado 'umbral' o 'threshold' en ingles.
    // El 'Umbral' o 'threshold' Define que porcentaje del objeto va a tener intersepción con el
    // contenedor para que nos nos avise dicha situación.
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    //El 'observer' se pone a observar el elemento 'media' y nuestro contenedor va a ser toda la pantalla
    observer.observe(this.player.media);
  }

  // Cuando se llama esta función se pasa un alista de 'entries',
  // que es una lista de todos los objetos que estamos observando
  handleIntersection(entries) {
    const entry = entries[0]; // Capturamos el primero objeto, el cual sería el 'media', unico en la lista
    //console.log(entry);

    // Guardamos el porcentaje real que esta visible, dicho porcentale lo da
    // la variable 'intersectionRatio' del 'entry', obtenida al ejecutar 'console.log'
    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
