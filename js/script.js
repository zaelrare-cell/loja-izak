document.addEventListener('DOMContentLoaded', () => {
  // ===== PARTICLES =====
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.35 + 0.05;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ===== TABS =====
  const tabs = document.querySelectorAll('.tab');
  const tabContainer = document.querySelector('.tabs');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const isRegister = tab.dataset.tab === 'register';
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      tabContainer.classList.toggle('register', isRegister);
      
      loginForm.classList.toggle('active', !isRegister);
      registerForm.classList.toggle('active', isRegister);
    });
  });

  // ===== PASSWORD TOGGLE =====
  document.querySelectorAll('.eye').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      const open = btn.querySelector('.eye-open');
      const closed = btn.querySelector('.eye-closed');
      
      if (input.type === 'password') {
        input.type = 'text';
        open.style.display = 'none';
        closed.style.display = 'block';
      } else {
        input.type = 'password';
        open.style.display = 'block';
        closed.style.display = 'none';
      }
    });
  });

  // ===== STRENGTH METER =====
  const regPassword = document.getElementById('regPassword');
  const strengthBar = document.querySelector('.strength-bar span');
  const strengthText = document.querySelector('.strength-text');

  regPassword.addEventListener('input', () => {
    const val = regPassword.value;
    let score = 0;
    
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const colors = ['#444', '#ff4d4d', '#ff9f1a', '#ffd700', '#00e676'];
    const labels = ['Muito fraca', 'Fraca', 'Média', 'Forte', 'Muito forte'];
    
    strengthBar.style.width = `${(score / 5) * 100}%`;
    strengthBar.style.background = colors[score] || '#444';
    strengthText.textContent = labels[score] || 'Força da senha';
  });

  // ===== TOAST =====
  const toast = document.getElementById('toast');
  function showToast(msg, error = false) {
    toast.textContent = msg;
    toast.className = 'toast' + (error ? ' error' : '');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // ===== FORM HANDLERS =====
  function setLoading(btn, state) {
    btn.classList.toggle('loading', state);
    btn.disabled = state;
  }

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = loginForm.querySelector('.btn');
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value;

    if (!email || !pass) return showToast('Preencha todos os campos', true);
    if (pass.length < 6) return showToast('Senha muito curta', true);

    setLoading(btn, true);
    
    // Simula request
    setTimeout(() => {
      setLoading(btn, false);
      showToast('Login realizado com sucesso');
      console.log('Login:', { email, pass });
    }, 1400);
  });

  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = registerForm.querySelector('.btn');
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;
    const terms = document.getElementById('terms').checked;

    if (!name || !email || !pass || !confirm) return showToast('Preencha todos os campos', true);
    if (pass.length < 6) return showToast('Senha muito curta', true);
    if (pass !== confirm) return showToast('As senhas não coincidem', true);
    if (!terms) return showToast('Aceite os termos', true);

    setLoading(btn, true);

    setTimeout(() => {
      setLoading(btn, false);
      showToast('Conta criada com sucesso');
      console.log('Cadastro:', { name, email, pass });
      
      setTimeout(() => {
        document.querySelector('[data-tab="login"]').click();
      }, 1600);
    }, 1600);
  });
});
