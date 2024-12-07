document.addEventListener("DOMContentLoaded", () => {


	const canvas = document.getElementById("particles");
	const ctx = canvas.getContext("2d");
	
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	let particlesArray = [];
	
	
	class Particle {
	  constructor(x, y, size, speedX, speedY) {
	    this.x = x;
	    this.y = y;
	    this.size = size;
	    this.speedX = speedX;
	    this.speedY = speedY;
	  }
	
	  
	  draw() {
	    ctx.beginPath();
	    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
	    ctx.fillStyle = "white";
	    ctx.fill();
	  }
	
	  // Actualizar posición de la partícula
	  update() {
	    this.x += this.speedX;
	    this.y += this.speedY;
		
	    // Rebotar si toca los bordes
	    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
	    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
	  }
	}
	
	// Inicializar partículas
	function initParticles() {
	  particlesArray = [];
	  const numberOfParticles = 100; // Número de partículas
	
	  for (let i = 0; i < numberOfParticles; i++) {
	    const size = Math.random() * 3 + 1; // Tamaño aleatorio
	    const x = Math.random() * canvas.width;
	    const y = Math.random() * canvas.height;
	    const speedX = (Math.random() - 0.5) * 2;
	    const speedY = (Math.random() - 0.5) * 2;
	    particlesArray.push(new Particle(x, y, size, speedX, speedY));
	  }
	}
	
	// Animación
	function animateParticles() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  particlesArray.forEach((particle) => {
	    particle.update();
	    particle.draw();
	  });
	  requestAnimationFrame(animateParticles);
	}
	
	
	window.addEventListener("resize", () => {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	  initParticles();
	});
	
	
	initParticles();
	animateParticles();
});