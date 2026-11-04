// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form (front-end validation only; connect to a form service to actually send)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach((input) => {
    const ok = input.value.trim() !== '' && input.checkValidity();
    input.closest('.field').classList.toggle('error', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    status.textContent = '必須項目を正しく入力してください。';
    return;
  }

  status.textContent = 'お問い合わせありがとうございます！担当者より2営業日以内にご連絡いたします。';
  form.reset();
});
